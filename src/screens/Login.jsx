import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/home");
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
      <div style={{ height: "100vh", backgroundColor: "blue", width: "50vw" }}>
        <Button
          variant="contained"
          title="Login"
          style={{ height: 50, width: 50, backgroundColor: "yellow" }}
          onClick={handleLogin}
        />
      </div>
      
      {/*RIGHT SIDE  */}
      <div style={{ height: "100vh", backgroundColor: "green", width: "50vw" }}>
        <Button
          variant="contained"
          title="Login"
          style={{ height: 50, width: 50, backgroundColor: "yellow" }}
          onClick={handleLogin}
        />
      </div>
    </div>
  );
};

export default Login;
