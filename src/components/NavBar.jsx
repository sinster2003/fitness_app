import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <Stack
      className="navbar-stack"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        mt: { xs: "20px", sm: "32px" },
        gap: { xs: "40px", sm: "122px" },
        justifyContent: { sm: "none" },
        px: "20px",
      }}
    >
      <Link to="/">
        <img
          className="logo-img"
          src={logo}
          alt="logo"
          style={{ width: "48px", height: "48px " }}
        />
      </Link>
      <Stack
        direction="row"
        alignItems="flex-start"
        sx={{ fontSize: "20px", gap: { xs: "30px", sm: "40px" } }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default NavBar;
