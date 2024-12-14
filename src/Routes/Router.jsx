import { createBrowserRouter } from "react-router-dom";
import AddJob from "../components/AddJob";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import JobApply from "../pages/JobApply";
import JobDetails from "../pages/JobDetails";
import MyApplications from "../pages/MyApplications";
import MyPostedJob from "../pages/MyPostedJob";
import ViewApplication from "../pages/ViewApplication";
import AuthLayout from "./../Auth/AuthLayout";
import Login from "./../Auth/Login";
import Register from "./../Auth/Register";
import PrivateRoute from "./PrivateRoute";

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
    path: "/viewApplications/:job_id",
    element: (
      <PrivateRoute>
        <ViewApplication></ViewApplication>
      </PrivateRoute>
    ),
    loader:({params}) => fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`)
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
