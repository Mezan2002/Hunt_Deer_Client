import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main/Main";
import About from "../../About/About";
import Home from "../../Home/Home/Home";
import Login from "../../Login/Login";
import Signup from "../../Signup/Signup";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
]);

export default Routes;
