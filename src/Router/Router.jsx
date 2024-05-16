import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/Home/About/About";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SingUp/SignUp";
import CheckOut from "../pages/CheckOut/CheckOut";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
         },
         {
            path: "/about",
            element: <About></About>,
         },
         {
            path: "/signIn",
            element: <SignIn></SignIn>,
         },
         {
            path: "/signUp",
            element: <SignUp></SignUp>,
         },
         {
            path: "/bookings",
            element: (
               <PrivateRoute>
                  <Bookings></Bookings>
               </PrivateRoute>
            ),
         },
         {
            path: "/checkOut/:id",
            element: (
               <PrivateRoute>
                  <CheckOut></CheckOut>
               </PrivateRoute>
            ),
            loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
         },
      ],
   },
]);

export default router;
