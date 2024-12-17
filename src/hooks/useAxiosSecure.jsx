import axios from "axios";
import { useEffect } from "react";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  WithCredentials: true,
});
const useAxiosSecure = () => {
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log("error caught interceptor", error);
        return Promise.reject(error);
      }
    );
  });
  return axiosInstance;
};

export default useAxiosSecure;
