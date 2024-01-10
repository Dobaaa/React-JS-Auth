import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="d-flex top-bar">
      <i class="fa-solid fa-database"></i>
      <Link to="/" className="link">
        Go To Website
      </Link>
    </div>
  );
}
