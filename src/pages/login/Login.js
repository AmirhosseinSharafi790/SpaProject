import { useNavigate } from "react-router-dom";
import MyNavbar from "../../components/navbar/Navbar";
import Swal from "sweetalert2";
import "./Login.css";
import { useState } from "react";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const submitHandler = () => {
    if (username == "admin" && password == 12345) {
      document.cookie =
        "username=admin; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
      navigate("/panel");
    } else {
      Swal.fire({
        title: "Error!",
        text: "Do you want to continue",
        icon: "error",
        confirmButtonText: "Cool",
      });
    }
  };
  return (
    <div>
      <MyNavbar />
      <form action="" className="form1">
        <input
          className="input1"
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
          required
        />
        <input
          className="input1"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
          required
        />
        <input
          onClick={submitHandler}
          className="input1"
          type="button"
          value="LOGIN"
        />
      </form>
    </div>
  );
}

export default Login;
