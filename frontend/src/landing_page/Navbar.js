import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const [session, setSession] = useState(false);

  const checkSession = async () => {
    try {
      const res = await axios.get("http://localhost:3002/api/auth/", { withCredentials: true });
      setSession(res.data.status);
    } catch {
      setSession(false);
    }
  };

  useEffect(() => {
    checkSession();
    const timer = setInterval(checkSession, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg border-bottom bg-white">
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img src="media/images/logo.svg" width="120" />
        </Link>

        <ul className="navbar-nav ms-auto align-items-center">

          {!session && (
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Signup</Link>
            </li>
          )}

          <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/pricing">Pricing</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/support">Support</Link></li>

          {session && (
            <>
              <button
                className="btn btn-success ms-3"
                onClick={() => {
                  window.location.href = "http://localhost:3001";
                }}
              >
                Go to Dashboard
              </button>

              <button
                className="btn btn-outline-danger ms-3"
                onClick={async () => {
                  await axios.post("http://localhost:3002/api/auth/logout", {}, { withCredentials: true });
                  window.location.href = "http://localhost:3000";
                }}
              >
                Logout
              </button>
            </>
          )}

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
