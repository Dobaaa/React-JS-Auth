import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/Website Pages/Auth/SignUp";
import Login from "./pages/Website Pages/Auth/Login";
import Home from "./pages/Website Pages/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Users from "./pages/Dashboard/Users/Users";
import UpdateUser from "./pages/Dashboard/Users/UpdateUser";
import CreateUser from "./pages/Dashboard/Users/CreateUser";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/users" element={<Users />} />
          <Route path="users/:id" element={<UpdateUser />} />
          <Route path="user/create" element={<CreateUser />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
