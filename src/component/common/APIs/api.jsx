import axios from "axios";

// const URL = process.env.REACT_APP_API;

const axiosInstance = axios.create({
    baseURL: "https://9066-106-222-215-174.ngrok-free.app",
    headers: {
      "ngrok-skip-browser-warning": "69420",
    "Content-Type": "application/json",
    },
  });

//  ---------- Login & Register API --------------------------------
export const LoginAPI = async (payload) => {
    try {
      const response = await axiosInstance.post(`/rumeno/user/login`, payload);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  
  export const RegisterAPI = async (payload) => {
    try {
      const response = await axiosInstance.post(`/rumeno/user/register`, payload);
      return response?.data;
    } catch (error) {
      throw error;
    }
  };
  
  // -------------------------ForgotPasswprd & Reset API----------------------------------
  export const ForgotAPI = async (payload) => {
    try {
      const response = await axiosInstance.post(`/rumeno/user/forgetPassword`, payload);
      return response?.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const ResetAPI = async (payload) => {
    try {
      const response = await axiosInstance.post(`/rumeno/user/reset`, payload);
      return response?.data;
    } catch (error) {
      throw error;
    }
  };
