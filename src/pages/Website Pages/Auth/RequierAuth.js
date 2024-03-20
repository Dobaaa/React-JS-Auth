import { useContext } from "react";
import { User } from "../../../context/Context";
import { Navigate, Outlet } from "react-router-dom";
import Login from "./Login";

export default function RequierAuth() {
  const user = useContext(User);
  return user.auth.UserDetails ? <Outlet /> : <Navigate to="/Login" />;
}
