import { Button, Typography, Paper, TextField, Modal } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StickyBox from "react-sticky-box/dist/esnext";
import DoctorIcon from "../components/DoctorIcon";
import PatientIcon from "../components/PatientIcon";
import ReactLoading from "react-loading";
import { login } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import PatientCard from "../components/PatientCard";
import AdminCard from "../components/AdminCard";

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

const modalContainerStyle = {
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
};

const Inventory = (props) => {
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const homeStore = useSelector((state) => state.homeStore);
  const { loading, isAdmin } = homeStore;

  useEffect(() => {
    console.log("OUR DAASFSDF", homeStore.posts);
    dispatch(login());
  }, [isAdmin]);

  const handleCreate = () => {
    setModalVisible(true);
  };
  return (
    <div style={container}>
      <div style={insideMainContainer}>
        {/* LEFT SIDE */}
        <StickyBox style={leftSide}>
          <div style={logo}>{isAdmin && <DoctorIcon />}</div>

          <div style={buttonsContainer}>
            <Button
              variant="contained"
              style={{ marginTop: 20 }}
              size="large"
              onClick={() => navigate("/home")}
            >
              HOME
            </Button>

            {/* only show this button to admins */}
            {homeStore.isAdmin && (
              <Button
                variant="contained"
                style={{ marginTop: 20 }}
                size="large"
                onClick={() => navigate("/inventory")}
              >
                INVENTORY
              </Button>
            )}
          </div>
        </StickyBox>

        {/* RIGHT SIDE */}
        {!loading && (
          <div style={rightSide}>
            <Typography variant="h3">Inventory</Typography>
            {/* if patient */}
            {isAdmin &&
              homeStore.inventory.map((item, index) => {
                return <PatientCard data={item} />;
              })}
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

      {isAdmin && (
        <Button
          variant="contained"
          style={createButton}
          size="large"
          onClick={() => setModalVisible(true)}
          children="Create"
        />
      )}
      <Modal open={modalVisible}>
        <div style={modalContainerStyle}>
          <Paper
            style={{
              height: "200px",
              width: "400px",
              marginTop: "15vh",
              display: "flex",
              flexDirection: "column",
              padding: "10px",
              overflow: "auto",
            }}
          >
            <Typography variant="h6">Create item</Typography>

            <TextField label="Item ID" type="ID" style={{ margin: "10px" }} />

            <div style={{ marginTop: "auto", alignSelf: "center" }}>
              <Button
                size="large"
                variant="contained"
                children="Update"
                style={{ margin: "10px" }}
              />
              <Button
                children="cancel"
                variant="contained"
                style={{
                  margin: "10px",
                  backgroundColor: "red",
                }}
                onClick={() => setModalVisible(false)}
              />
            </div>
          </Paper>
        </div>
      </Modal>
    </div>
  );
};

export default Inventory;
