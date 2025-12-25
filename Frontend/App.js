// index.js or main entry file
import React, { useContext } from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
  useNavigate,
} from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Reset from "./Components/reset";
import Category from "./Components/Category";
import Admin from "./Components/Admin";
import Hotel from "./Components/Hotel";
import AdminArea from "./Components/AdminArea";

import UserContext, { UserProvider } from "./utils/UserContext";
import { Navigate } from "react-router-dom";
import ContactUs from "./Components/ContactUs";
import AboutUs from "./Components/AboutUs";
import Room from "./Components/Room";
import AddRoom from "./Components/Addroom";
import Allrooms from "./Components/Allrooms";
import Viewall from "./Components/Viewall";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet /> 
      <Footer />
    </div>
  );
};

const Verification = () => {
  const { loggedInUser } = useContext(UserContext);
  if (!loggedInUser) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home/register", element: <Register /> },
      { path: "home/login", element: <Login /> },
      { path: "home/reset", element: <Reset /> },
      { path: "home/contactus", element: <ContactUs /> },
      { path: "home/aboutus", element: <AboutUs /> },
      {
        path: "app",
        element: <Verification />,
        children: [
          { path: "selectcategory", element: <Category /> },
          { path: "adminlogin", element: <Admin /> },
          { path: "hotelroomlogin", element: <Hotel /> },
          { path: "adminloggedoverviewofhotel", element: <AdminArea /> },
          { path: "adminloggedoverviewofhotel/admin/rooms", element: <Room /> },
          { path: "admin/createroom", element:<AddRoom/> },
          {path:"getallrooms" ,element:<Viewall/>},
          { path:"admin/viewallrooms",element:<Allrooms/>}
        ],
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>
);
