import { Heading3 } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";


export default function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const location = useLocation()
  console.log(location)
  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginFormData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <main className="login-page">
        {location.state?.message && <h3 style={{color:"#161616"}}>{location.state.message}</h3>}
      <p className="login-heading">Sign in to your account</p>
      <form onClick={handleSubmit} action="" className="login-form">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email address"
          className="login-input"
          onChange={handleChange}
          value={loginFormData.email}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="login-input"
          value={loginFormData.password}
        />
        <button className="login-button">Sign in</button>
      </form>
      <p className="login-text">
        Don’t have an account?{" "}
        <Link to="." className="login-link">
          Create one now
        </Link>{" "}
      </p>
    </main>
  );
}
