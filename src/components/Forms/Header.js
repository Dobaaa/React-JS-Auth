import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="headr">
      <div className="home">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link className="nav-link">About </Link>
        <Link to="/dashboard" className="nav-link">
          MyDashboard
        </Link>
      </div>

      <ul>
        <Link to="/register" className="link">
          Register
        </Link>
        <Link to="/login" className="link">
          Login
        </Link>{" "}
      </ul>

      {/* <div className="link" onClick={LogOut}>
        log out
      </div> */}
    </nav>
  );
}
