import { Alert, Paper, Typography } from "@mui/material";
import React from "react";

const PatientCard = ({ data }) => {
  const currentDate = Date.now();

  const newDateFormat = new Date(data.expiryDate).toDateString();
  return (
    <Paper style={{ width: "90%", height: 250, marginTop: 20, padding: "1%" }}>
      <Typography variant="body1">{`ID: ${data.key}`}</Typography>

      <Typography style={{ marginTop: 20 }} variant="h4">
        {data.title}
      </Typography>
      <div style={{ marginTop: 15 }}>
        <Typography variant="h6">{data.description}</Typography>
      </div>

      {currentDate > data.expiryDate
        ? alert(`${data.title} has EXPIRED`)
        : console.log("NOT EXPIRED")}

      <Typography
        style={{ marginTop: 20 }}
        variant="body2"
        fontWeight={"bold"}
        color={"red"}
      >{`Expiry Date: ${newDateFormat}`}</Typography>
    </Paper>
  );
};

export default PatientCard;
