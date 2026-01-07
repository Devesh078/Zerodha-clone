import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/__auth");
        return;
      }

      const { data } = await axios.post(
        "http://127.0.0.1:3002/api/auth/",
        {},
        { withCredentials: true }
      );

      const { status, user } = data;
      setUser(user);

      if (status) {
        toast(`Hello ${user}`);
      } else {
        removeCookie("token");
        navigate("/__auth");
      }
    };

    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    navigate("/__auth");
  };

  return (
    <div className="home_page">
      <h3>Welcome {user}</h3>
      <button onClick={Logout}>LOGOUT</button>
    </div>
  );
};

export default Home;
