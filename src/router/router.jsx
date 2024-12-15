import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../components/Home/Home";
import Register from "../pages/Register";
import Login from "../components/Login";
import JobDetails from "../pages/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../components/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <h3>not found</h3>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
      {
        path: "/jobApply/:id",
        element: <PrivateRoute><JobApply></JobApply></PrivateRoute>,
      },
      {
        path:"/myApplication",
        element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
      }
      ,
      {
        path:"/addJob",
        element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
      } ,
      {
        path:"/myPostedJobs",
        element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
      },
      {
        path:"/viewApplications/:job_id",
        element: <PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:3000/job-applications/jobs/${params.job_id}`)
      }
      ,
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
