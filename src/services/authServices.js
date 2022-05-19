import axios from "axios";
import { LOGIN_API, SIGNUP_API } from "utils";
export const loginService = async (email, password) => {
  const response = await axios.post(LOGIN_API, { email, password });
  return response;
};

export const signupService = async (userDetails) => {
  const response = await axios.post(SIGNUP_API, { ...userDetails });
  return response;
};
