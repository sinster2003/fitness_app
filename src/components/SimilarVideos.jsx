import React from "react";
import { Box } from "@mui/material";
import SimilarComponent from "./SimilarComponent";

const SimilarVideos = ({ target, equipment }) => {
  return (
    <Box>
      <SimilarComponent info="Target Muscle" data={target} />
      <SimilarComponent info="Equipment" data={equipment} />
    </Box>
  );
};

export default SimilarVideos;
