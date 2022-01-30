import {
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
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

const CreateModal = ({ visible }) => (
  <Dialog open={visible} keepMounted>
    <DialogTitle>{"Delete this user"}</DialogTitle>

    <DialogContent>
      <TextField />
    </DialogContent>

    <DialogActions>
      <Button
        size="large"
        variant="contained"
        children="No"
        style={{ margin: "10px" }}
      />
      <Button
        children="Delete"
        variant="contained"
        size="small"
        style={{
          margin: "10px",
          backgroundColor: "red",
        }}
      />
    </DialogActions>
  </Dialog>
);
const HomePage = (props) => {
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
          <div style={logo}>
            {isAdmin && <DoctorIcon />}
            {!isAdmin && <PatientIcon />}
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
            {/* if patient */}
            {isAdmin &&
              homeStore.posts.map((item, index) => {
                return <AdminCard data={item} />;
              })}

            {/* if ADMIN */}
            {!isAdmin &&
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
      <CreateModal visible={modalVisible} />
      {isAdmin && (
        <Button
          variant="contained"
          style={createButton}
          size="large"
          onClick={handleCreate}
          children="Create"
        />
      )}
    </div>
  );
};

export default HomePage;
