import { Paper, Typography } from "@mui/material";
import React from "react";

const PatientCard = ({ data }) => {
  console.log("each item", data);
  return (
    <Paper style={{ width: "90%", height: 250, marginTop: 20, padding: "1%" }}>
      <Typography variant="h4">{data.title}</Typography>
      <div style={{ marginTop: 15 }}>
        <Typography variant="h6">{data.description}</Typography>
      </div>

      <Typography
        style={{ marginTop: 20 }}
        variant="body2"
        fontWeight={"bold"}
        color={"red"}
      >{`Expiry Date: ${data.expiryDate}`}</Typography>
    </Paper>
  );
};

export default PatientCard;
