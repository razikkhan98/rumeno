// import axios from "axios";

// const URL = process.env.REACT_APP_API;

// const axiosInstance = axios.create({
//     baseURL: "https://decc-106-222-214-222.ngrok-free.app",
//     headers: {
//       "ngrok-skip-browser-warning": "69420",
//     "Content-Type": "application/json",
//     },
//   });
// const axiosInstance = axios.create({
//     baseURL: "  https://8afb-106-222-214-181.ngrok-free.app",
//     headers: {
//       "ngrok-skip-browser-warning": "69420",
//     "Content-Type": "application/json",
//     },
//   });

// //  ---------- Login & Register API --------------------------------
// export const LoginAPI = async (payload) => {
//     try {
//       const response = await axiosInstance.post(`/rumeno/user/login`, payload);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   };
  
  
//   export const RegisterAPI = async (payload) => {
//     try {
//       const response = await axiosInstance.post(`/rumeno/user/register`, payload);
//       return response?.data;
//     } catch (error) {
//       throw error;
//     }
//   };
  
//   // -------------------------ForgotPasswprd & Reset API----------------------------------
//   export const ForgotAPI = async (payload) => {
//     try {
//       const response = await axiosInstance.post(`/rumeno/user/forgetPassword`, payload);
//       return response?.data;
//     } catch (error) {
//       throw error;
//     }
//   };
  
//   export const ResetAPI = async (payload) => {
//     try {
//       const response = await axiosInstance.post(`/rumeno/user/reset`, payload);
//       return response?.data;
//     } catch (error) {
//       throw error;
//     }
//   };



import axios from "axios";

const API_BASE_URL = "https://4715-106-222-215-241.ngrok-free.app/rumeno"; // Replace with your actual base URL


// 🔹 GET: Fetch data from a dynamic endpoint
export const getData = async (endpoint) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// 🔹 POST: Send data to a dynamic endpoint
export const postData = async (endpoint, data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}${endpoint}`, data);
    console.log('response:2 ', response);

    return response;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// 🔹 PUT: Update data on a dynamic endpoint
export const updateData = async (endpoint, id, data) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${endpoint}/${id}`, data);
    return response;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// 🔹 DELETE: Remove data from a dynamic endpoint
export const deleteData = async (endpoint, id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
