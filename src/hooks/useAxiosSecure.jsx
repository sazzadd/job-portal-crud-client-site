import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
  baseURL: "https://server-site-job-portal.vercel.app",
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { handleLogOut } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log("error caught interceptor");
        if (error.status === 401 || error.status === 403) {
          console.log("need to logout user");
          handleLogOut()
            .then(() => {
              console.log("logout user");
              navigate("/auth/login");
            })
            .catch((error) => {
              console.log(error);
            });
        }
        return Promise.reject(error);
      }
    );
  }, []);
  return axiosInstance;
};

export default useAxiosSecure;
