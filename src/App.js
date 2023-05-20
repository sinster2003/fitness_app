import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { NavBar, Footer } from "./components";
import { Home, ExerciseDetail } from "./pages";

const App = () => {
  return (
    <Box sx={{ mx: { md: "100px", lg: "128px" } }}>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
