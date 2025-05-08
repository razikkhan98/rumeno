import axios from "axios";

export const API_BASE_URL = "https://0760-2401-4900-8823-f1f0-8422-6228-36ec-b12.ngrok-free.app/rumeno"; 

// const API_BASE_URL = "http://localhost:8000/rumeno"; // Localhost URL for development

// 🔹 GET: Fetch data from a dynamic endpoint
export const getData = async (endpoint) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${endpoint}`, {
      headers: {
        "ngrok-skip-browser-warning": "true", // Required for ngrok
        "Content-Type": "application/json", // Adjust as needed
      },
    });
    console.log('response: ', response);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// 🔹 POST: Send data to a dynamic endpoint
export const postData = async (endpoint, data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}${endpoint}`, data, {
      headers: {
        "ngrok-skip-browser-warning": "true", // Required for ngrok
        "Content-Type": "application/json", // Adjust as needed
         "Access-Control-Allow-Origin": "*",
      },
    });

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
