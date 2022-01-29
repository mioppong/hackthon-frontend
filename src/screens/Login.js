import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/home");
  };
  return (
    <div>
      <div>LOGIN</div>
      <div>LOGIN</div>
      <div>LOGIN</div>
      <div>LOGIN</div>
      <div>LOGIN</div>
      <div>LOGIN</div>
      <Button variant="contained" title="Login" onClick={handleLogin} />
    </div>
  );
};

export default Login;
