import {
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StickyBox from "react-sticky-box/dist/esnext";
import DoctorIcon from "../components/DoctorIcon";
import PatientIcon from "../components/PatientIcon";
import ReactLoading from "react-loading";

const container = {
  height: "100vh",
  overflow: "auto",
};
const insideMainContainer = {
  display: "flex",
  flex: 1,
  alignItems: "flex-start",
  justifyContent: "center",
};

const rightSide = {
  width: "85vw",
  padding: "1%",
  // backgroundColor: "red",
};
const leftSide = {
  width: "12vw",
  height: "98vh",
  borderRadius: 20,
  borderWidth: 1,
  backgroundColor: "#f2f2f2",
};

const logo = {
  height: 120,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const buttonsContainer = {
  display: "flex",
  flexDirection: "column",
  flex: 1,
};

const createButton = {
  position: "absolute",
  top: "80%",
  left: "90%",
  width: 100,
  height: 100,
};

const HomePage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {}, []);

  const getData = async () => {
    const response = await axios.get();
  };
  return (
    <div style={container}>
      <div style={insideMainContainer}>
        {/* LEFT SIDE */}
        <StickyBox style={leftSide}>
          <div style={logo}>
            {/* <DoctorIcon /> */}
            <PatientIcon />
          </div>

          <div style={buttonsContainer}>
            <Button
              variant="contained"
              style={{ marginTop: 20 }}
              size="large"
              onClick={() => navigate("/home")}
            >
              HOME
            </Button>
            <Button
              variant="contained"
              style={{ marginTop: 20 }}
              size="large"
              onClick={() => navigate("/inventory")}
            >
              INVENTORY
            </Button>
          </div>
        </StickyBox>

        {/* RIGHT SIDE */}
        {!loading && (
          <div style={rightSide}>
            <h1>Main Content</h1>
            <h1>Main Content</h1>
            <h1>Main Content</h1>
            <h1>Main Content</h1>
            <h1>Main Content</h1>
            <h1>Main Content</h1>
            <h1>Main Content</h1>
            <h1>Main Content</h1>
            <h1>Main Content</h1>
            <h1>Main Content</h1>
            <h1>Main Content</h1>
            <h1>Main Content</h1>
            <h1>Main Content</h1>
            <h1>Main Content</h1>
            <h1>Main Content</h1>
            <h1>Main Content</h1>
            <h1>Main Content</h1>
            <h1>Main Content</h1>
            <h1>Main Content</h1>
            <h1>Main Content</h1>
            <h1>Main Content</h1>

            <Button
              variant="contained"
              style={createButton}
              size="large"
              onClick={() => navigate("/home")}
              children="Create"
            />
          </div>
        )}
        {loading && (
          <div
            style={{
              ...rightSide,
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <ReactLoading
              type={"cylon"}
              color={"dodgerblue"}
              height={"20%"}
              width={"20%"}
            />
            <Typography variant="h5" children="Loading :)" />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
