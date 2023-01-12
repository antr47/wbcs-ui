import actionTypes from "./actionTypes";
export const changeSystemLanguage = (language) => ({
  type: actionTypes.CHANGE_SYSTEM_LANGUAGE,
  language: language,
});
