import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { handleSendData } from "../../services/Service";
import ModalExample from "../../layouts/components/Modal";
import Hero from "../../layouts/components/Hero";
class Home extends Component {
  canvasRef = React.createRef();
  resultCanvasRef = React.createRef();
  imageRef = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      previewImgUrl: "",
      loadedImg: "",
      haveResult: false,
      result: {},
      isLoading: false,
      isShowModal: false,
      isSelectedImage: false,
      iou: 0.8,
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error);
    });
  };

  handleOnChangeImage = (event) => {
    let data = event.target.files;
    let file = data[0];

    if (file) {
      let copyState = { ...this.state };
      copyState.isSelectedImage =
        this.state.isSelectedImage === false
          ? !this.state.isSelectedImage
          : this.state.isSelectedImage;

      copyState.haveResult = false;
      copyState.result = {};
      this.setState(copyState);

      let objectUrl = URL.createObjectURL(file);
      const img = new Image();
      img.src = objectUrl;
      const ctx = this.canvasRef.current.getContext("2d");
      img.onload = () => {
        this.drawImageScaled(img, ctx);
      };
    }
  };
  toggle = () => {
    this.setState({
      isShowModal: !this.state.isShowModal,
    });
  };

  canvasToBlob = async (canvas) => {
    if (canvas.toBlob) {
      return new Promise(function (resolve) {
        canvas.toBlob(resolve);
      });
    } else {
      throw new Error("canvas.toBlob Invalid");
    }
  };

  sendData = async () => {
    this.setState({
      isSelectedImage: true,
      haveResult: false,
      result: {},
    });
    try {
      let canvas = this.canvasRef.current;
      let image = await this.canvasToBlob(canvas);
      let objectUrl = URL.createObjectURL(image);
      let base64 = await this.getBase64(image);
      this.setState({
        isLoading: true,
        haveResult: true,
        previewImgUrl: objectUrl,
      });
      let res = await handleSendData({
        image: base64,
      });
      if (res && res.errCode === 0) {
        this.setState({
          isLoading: false,
        });
        let res_boxes = res.data.boxes;
        let res_classes = res.data.classes;
        let res_scores = res.data.scores;
        let result = this.buildDetectedObjects(
          res_scores,
          res_boxes,
          res_classes
        );
        if (result.length > 0) {
          let listObjects = [];
          for (let i = 0; i < result.length; i++) {
            let object = {};
            object.label = result[i].label;
            object.score = result[i].score;
            listObjects.push(object);
          }
          this.setState({
            result: listObjects,
          });
        }
        this.renderPredictions(res_scores, res_boxes, res_classes);
      } else {
        console.log("Fail");
      }
    } catch (err) {
      console.log("Fail:", err);
    }
  };

  buildDetectedObjects(scores, boxes, classes) {
    const labelMap = {
      1: { name: "Eosinophil", color: "red" },
      2: { name: "Lymphocyte", color: "yellow" },
      3: { name: "Monocyte", color: "lime" },
      4: { name: "Neutrophil", color: "blue" },
    };

    const detectionObjects = [];

    let img = new Image();
    img.src = this.state.previewImgUrl;
    let w = img.width;
    let h = img.height;

    Array.from(scores).forEach((score, i) => {
      if (score > this.state.iou) {
        const bbox = [];
        const minY = boxes[i][0] * h;
        const minX = boxes[i][1] * w;
        const maxY = boxes[i][2] * h;
        const maxX = boxes[i][3] * w;
        bbox[0] = minX;
        bbox[1] = minY;
        bbox[2] = maxX - minX;
        bbox[3] = maxY - minY;
        detectionObjects.push({
          class: classes[i],
          label: labelMap[classes[i]]["name"],
          score: score.toFixed(4),
          bbox: bbox,
        });
      }
    });
    return detectionObjects;
  }
  renderPredictions = (scores, boxes, classes) => {
    const img = this.imageRef.current;

    img.src = this.state.previewImgUrl;
    if (this.state.haveResult) {
      let ctx = this.resultCanvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      const font = "14px sans-serif";
      ctx.font = font;
      ctx.textBaseline = "top";

      const detections = this.buildDetectedObjects(scores, boxes, classes);
      img.onload = () => {
        ctx.drawImage(img, 0, 0);
        console.log(detections);
        detections.forEach((item, index) => {
          const x = item["bbox"][0];
          const y = item["bbox"][1];
          const width = item["bbox"][2];
          const height = item["bbox"][3];
          // Draw the bounding box.
          ctx.strokeStyle = "#00FFFF";
          ctx.lineWidth = 4;
          ctx.strokeRect(x, y, width, height);

          // Draw the label background.
          ctx.fillStyle = "#00FFFF";
          const textWidth = ctx.measureText(
            item["label"] + " " + (100 * item["score"]).toFixed(2) + "%"
          ).width;
          const textHeight = parseInt(font, 10);
          ctx.fillRect(x, y, textWidth + 4, textHeight + 4);
        });

        detections.forEach((item) => {
          const x = item["bbox"][0];
          const y = item["bbox"][1];
          // Draw the text last to ensure it's on top.
          ctx.fillStyle = "#000000";
          ctx.fillText(
            item["label"] + " " + (100 * item["score"]).toFixed(2) + "%",
            x,
            y
          );
        });
      };
    }
  };
  drawImageScaled = (img, ctx) => {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.min(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  };
  onChangeIoU = (event) => {
    let copyState = { ...this.state };
    copyState.iou = event.target.value;
    this.setState(
      {
        ...copyState,
      },
      () => {
        console.log(copyState);
      }
    );
  };
  render() {
    return (
      <>
        <Hero />
        <div className="container-fluid home-content">
          <div className="col-12">
            <h1 className="text-primary text-center my-5">
              <FormattedMessage id="home.title" />
            </h1>
            <div className="text-center mb-4">
              <input
                id="loadImg"
                type="file"
                className=""
                hidden
                accept=".jpg,.jpeg,.png"
                onChange={(event) => this.handleOnChangeImage(event)}
              />
              <label
                htmlFor="loadImg"
                className="btn btn-outline-primary rounded-pill py-3 my-2 px-5"
              >
                <FormattedMessage id="home.select" />
              </label>

              <button
                className={
                  this.state.isSelectedImage === true
                    ? "btn btn-primary rounded-pill py-3 px-5 my-2 mx-3 detect-button"
                    : "btn btn-primary rounded-pill py-3 px-5 my-2 mx-3 detect-button d-none"
                }
                onClick={() => this.sendData()}
              >
                <FormattedMessage id="home.detect" />
              </button>
              <button
                className={
                  this.state.isLoading === true ||
                  this.state.haveResult === false
                    ? "btn btn-primary rounded-pill my-2 py-3 px-5 d-none"
                    : "btn btn-primary rounded-pill my-2 py-3 px-5"
                }
                onClick={() => this.toggle()}
              >
                <FormattedMessage id="home.more" />
              </button>
            </div>
            <div className="text-center mb-4 col-12">
              <h5 className="d-inline-block text-primary text-uppercase text-center  mb-4">
                <FormattedMessage id="home.thresh" />
              </h5>
              <select
                className="btn btn-outline px-3 mx-3 select"
                onChange={(event) => {
                  this.onChangeIoU(event);
                }}
                value={this.state.iou}
              >
                <option value={0.5} className="select-item">
                  0.50
                </option>
                <option value={0.55} className="select-item">
                  0.55
                </option>
                <option className="select-item" value={0.6}>
                  0.60
                </option>
                <option className="select-item" value={0.65}>
                  0.65
                </option>
                <option className="select-item" value={0.7}>
                  0.70
                </option>
                <option className="select-item" value={0.75}>
                  0.75
                </option>
                <option className="select-item" value={0.8} defaultValue>
                  0.80
                </option>
                <option className="select-item" value={0.85}>
                  0.85
                </option>
                <option className="select-item" value={0.9}>
                  0.90
                </option>
                <option className="select-item" value={0.95}>
                  0.95
                </option>
              </select>
            </div>
            {this.state.isSelectedImage && (
              <div className="col-12 d-flex mb-3 image-header">
                {" "}
                <div className="col-6">
                  {" "}
                  <h4 className="d-inline-block text-primary text-uppercase text-center border-bottom border-5 original-image-title">
                    <FormattedMessage id="home.original-image" />
                  </h4>
                </div>
                <div className="col-6">
                  <h4 className="d-inline-block text-primary text-uppercase text-center border-bottom border-5 result-image-title">
                    <FormattedMessage id="home.detection-result" />
                  </h4>
                </div>
              </div>
            )}
            <div
              className={
                this.state.isSelectedImage === true
                  ? "display-container col-12"
                  : "d-none"
              }
            >
              <div className="canvas1">
                <img
                  ref={this.imageRef}
                  hidden
                  src={this.state.previewImgUrl}
                  alt=""
                />

                <canvas
                  ref={this.canvasRef}
                  id="myCanvas1"
                  width="350"
                  height="350"
                  className="rounded"
                ></canvas>
              </div>

              <div className="loading-spinner my-3 col-1">
                {this.state.isLoading && (
                  <div className="spinner-border text-info" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                )}
              </div>
              <div className="canvas">
                {this.state.haveResult && (
                  <div>
                    <canvas
                      className="rounded"
                      ref={this.resultCanvasRef}
                      id="myCanvas"
                      width="350"
                      height="350"
                    >
                      Your browser does not support the HTML5 canvas tag.
                    </canvas>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {this.state.isShowModal && (
          <ModalExample
            isShowModal={this.state.isShowModal}
            result={this.state.result}
            toggle={this.toggle}
          />
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    language: state.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
