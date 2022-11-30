import axios from "../axios";

const handleSendData = (data) => {
  console.log(data);
  return axios.post(`/api/send-data`, data);
};
export { handleSendData };
