import React from "react";
import Loader from "./Loader";
import HorizontalScrollBar from "./HorizontalScrollBar";
import { Typography, Box } from "@mui/material";

const SimilarComponent = ({ info, data }) => {
  return (
    <Box sx={{ position: "relative", pb: "30px" }}>
      <Typography
        sx={{
          fontSize: { xs: "32px", md: "40px", lg: "48px" },
          fontFamily: "Josefin Sans",
          mt: { xs: "60px", md: "80px" },
          textAlign: { xs: "center", lg: "left" },
        }}
      >
        Watch Similar <span style={{ color: "#ff2526" }}>{info}</span> Exercises
      </Typography>
      {data?.length > 0 ? <HorizontalScrollBar data={data} /> : <Loader />}
    </Box>
  );
};

export default SimilarComponent;
