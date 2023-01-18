import Login from "../../Pages/Login/Login";
import Regester from "../../Pages/Regester/Regester";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../MainLayout/Main");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/regerter",
        element: <Regester></Regester>,
      },
    ],
  },
]);
