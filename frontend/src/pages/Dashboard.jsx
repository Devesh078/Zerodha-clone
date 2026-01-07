import { useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

export default function Dashboard() {
  const [cookies, removeCookie] = useCookies(["token"]);

  useEffect(() => {
    if (!cookies.token) {
      window.location.href = "http://localhost:3000";
    }
  }, [cookies]);

  const logout = async () => {
    await axios.post("http://localhost:3002/api/auth/logout", {}, { withCredentials: true });
    removeCookie("token");
    window.location.href = "http://localhost:3000";
  };

  return (
     <div className="home_page">
      <h1>WELCOME TO KITE DASHBOARD</h1>
    </div>
  );
}
