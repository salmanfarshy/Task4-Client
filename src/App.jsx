import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import User_management from "./components/User_management";
import Non_found from "./components/non_found";

const router = createBrowserRouter([
  {
    path: "/",
    element: <User_management />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Registration />,
  },
  /*{
    path: "*",
    element: <Non_found />,
  },*/
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
