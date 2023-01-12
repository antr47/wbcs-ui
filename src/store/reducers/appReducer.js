import actionTypes from "../actions/actionTypes";

const initialState = {
  language: "en",
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_SYSTEM_LANGUAGE:
      console.log(action);
      return {
        ...state,
        language: action.language,
      };
    default:
      return state;
  }
};

export default appReducer;
