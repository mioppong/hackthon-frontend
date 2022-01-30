import { Button } from "@mui/material";
import React, {useRef} from "react";
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

  const emailInputref = useRef();
  const passwordInputref = useRef();

  const submitHandler = (e) =>{
    e.preventDefault();

    const enteredEmail = emailInputref.current.value;
    const enteredPassword = passwordInputref.current.value; 

    const data = {
      email: enteredEmail,
      password: enteredPassword,
    }
    console.log(data);
    navigate("/home");
  }


  return (
    <div style={container}>
      {/* left side */}
      <div style={{ height: "100vh", width: "50vw" }}>
        <img src="https://images.unsplash.com/photo-1628771065518-0d82f1938462?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1lZGljaW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="left_img" alt="login_image"/>
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
          <form className="form-container" onSubmit={submitHandler}>
            <input name="email" className="form-field" type="text" placeholder="Please Enter your email" required ref={emailInputref} />
            <input name="password" className="form-field" type="password" placeholder="Please Enter your password" required ref={passwordInputref} />
            <button type="submit" className="form-field button">Register</button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
