import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🏥 Hospital Patient Management
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/register">Register Patient</Link>
        </li>

        <li>
          <Link to="/patients">View Patients</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;