import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/home", { isAdmin: true, data: "mydsfsdfsd" });
  };

  const container = {
    backgroundColor: "red",
    display: "flex",
    height: "100vh",
    width: "100vw",
  };
  return (
    <div style={container}>
      {/* left side */}
      <div style={{ height: "100vh", width: "50vw" }}>
        <img src="https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWVkaWNpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="left_img" alt="login_image"/>
        <Button
          variant="contained"
          title="Login"
          style={{ height: 50, width: 50, backgroundColor: "yellow" }}
          onClick={handleLogin}
        />
      </div>

      {/*RIGHT SIDE  */}
      <div style={{ height: "100vh", backgroundColor: "white", width: "50vw" }} className="right_screen">
        <Button
          variant="contained"
          title="Login"
          style={{ height: 50, width: 50, backgroundColor: "yellow" }}
          onClick={handleLogin}
        />
          <h1 className="heading_h1">HopNet - The place to know everything that's happening</h1>
        <div className="login_body"> 
        <div className="register-form">
          <form className="form-container">
            <input name="email" className="form-field" type="text" placeholder="Please Enter your email" required/>
            <input name="password" className="form-field" type="password" placeholder="Please Enter your password" required/>
            <button type="submit" className="form-field button">Register</button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
