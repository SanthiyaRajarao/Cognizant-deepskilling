import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => response.data,
  (error) =>
    Promise.reject({
      message: error.message,
      status: error.response?.status,
    })
);

export default apiClient;