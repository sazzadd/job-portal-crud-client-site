import { createBrowserRouter } from "react-router-dom";
import AddJob from "../components/AddJob";
import JobApply from "../components/JobApply";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import JobDetails from "../pages/JobDetails";
import MyApplications from "../pages/MyApplications";
import AuthLayout from "./../Auth/AuthLayout";
import Login from "./../Auth/Login";
import Register from "./../Auth/Register";
import PrivateRoute from "./PrivateRoute";
import MyPostedJob from "../components/MyPostedJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <h2>Route Not Found</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register", // /auth/register path
        element: <Register></Register>,
      },
    ],
  },

  {
    path: "/jobs/:id",
    element: (
      <PrivateRoute>
        <JobDetails></JobDetails>
      </PrivateRoute>
    ),

    loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`),
  },
  {
    path: "/addJob",
    element: (
      <PrivateRoute>
        <AddJob></AddJob>
      </PrivateRoute>
    ),
  },
  {
    path: "/myPostedJob",
    element: (
      <PrivateRoute>
        <MyPostedJob></MyPostedJob>
      </PrivateRoute>
    ),
  },
  {
    path: "/jobApply/:id",
    element: <JobApply></JobApply>,
  },

  {
    path: "/MyApplications",
    element: (
      <PrivateRoute>
        <MyApplications></MyApplications>
      </PrivateRoute>
    ),
  },
]);

export default router;
