import React from "react";
import { Stack, Typography } from "@mui/material";

const ImageStack = ({ imgSrc, bodypartName }) => {
  return (
    <Stack direction="row" alignItems="center" gap="20px">
      <img
        src={imgSrc}
        alt={bodypartName}
        style={{
          backgroundColor: "#ffd0b0",
          padding: "20px",
          borderRadius: "50%",
        }}
      />
      <Typography
        sx={{
          fontSize: "20px",
          textTransform: "capitalize",
          fontFamily: "Josefin Sans",
          width: { xs: "130px", lg: "0" },
        }}
      >
        {bodypartName}
      </Typography>
    </Stack>
  );
};

export default ImageStack;
