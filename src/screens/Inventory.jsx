import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import StickyBox from "react-sticky-box/dist/esnext";

const Inventory = () => {
  const navigate = useNavigate();
  const leftSide = {
    width: "12vw",
    height: "98vh",
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: "#f2f2f2",
  };

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

  const rightSide = { width: "85vw", padding: "1%" };
  const logo = {
    height: 120,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  };
  const buttonsContainer = {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    // backgroundColor: "blue",
  };
  return (
    <div style={container}>
      <div style={insideMainContainer}>
        {/* LEFT SIDE */}
        <StickyBox style={leftSide}>
          <div style={logo}>yerr </div>

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
        <div style={rightSide}>
          <h1>BOWWWWWWW</h1>
          <h1>BOWWWWWWW</h1>
          <h1>BOWWWWWWW</h1>
          <h1>BOWWWWWWW</h1>
          <h1>BOWWWWWWW</h1>
          <h1>BOWWWWWWW</h1>
          <h1>BOWWWWWWW</h1>
          <h1>BOWWWWWWW</h1>
          <h1>BOWWWWWWW</h1>
          <h1>BOWWWWWWW</h1>
          <h1>BOWWWWWWW</h1>
          <h1>BOWWWWWWW</h1>
          <h1>BOWWWWWWW</h1>
          <h1>BOWWWWWWW</h1>
          <h1>BOWWWWWWW</h1>
          <h1>BOWWWWWWW</h1>
          <h1>BOWWWWWWW</h1>
          <h1>BOWWWWWWW</h1>
          <h1>BOWWWWWWW</h1>
          <h1>BOWWWWWWW</h1>
          <h1>BOWWWWWWW</h1>
          <h1>BOWWWWWWW</h1>
          <h1>BOWWWWWWW</h1>
          <h1>BOWWWWWWW</h1>
          <h1>BOWWWWWWW</h1>
          <h1>BOWWWWWWW</h1>
          <h1>BOWWWWWWW</h1>
          <h1>BOWWWWWWW</h1>
          <h1>BOWWWWWWW</h1>
          <h1>BOWWWWWWW</h1>
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
        </div>
      </div>
    </div>
  );
};

export default Inventory;
