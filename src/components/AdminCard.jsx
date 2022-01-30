import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const AdminCard = ({ data }) => {
  console.log("yerrrrrr", data);
  return (
    <Paper
      style={{
        width: "90%",
        height: 240,
        marginTop: 20,
        padding: "1%",
        display: "flex",
      }}
    >
      <div style={{ margin: 5 }}>
        <Box
          component="img"
          sx={{
            height: 170,
            width: 200,
            borderRadius: 5,
          }}
          alt="The house from the offer."
          src={data.post.image}
        />
      </div>
      <div>
        <Typography variant="h4">{data.post.title}</Typography>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body1">{data.post.description}</Typography>
        </div>

        <div style={{ marginTop: 10 }}>
          <Typography variant="h6" fontWeight={"bold"}>
            {"Hospital"}
          </Typography>
          <Typography variant="body1">{data.hospital.name}</Typography>
          <Typography variant="body1">{data.hospital.address}</Typography>
          <Typography variant="body1">{data.hospital.phoneNumber}</Typography>
        </div>
      </div>
    </Paper>
  );
};

export default AdminCard;
