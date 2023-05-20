import { Box, Typography, Button } from "@mui/material";
import banner from "../assets/banner.jpg";

const HeroBanner = () => {
  return (
    <Box
      position="relative"
      className="explore-box"
      sx={{
        pt: { xs: "4rem", md: "10rem" },
        pl: { md: "20px", xl: "10rem" },
        display: { xs: "flex", md: "block" },
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={banner} alt="banner" className="hero-banner-img" />
      <Typography
        className="fitness-club"
        sx={{
          color: "#FF2625",
          fontWeight: 600,
          fontSize: "26px",
          mb: "8px",
          fontFamily: "Josefin Sans",
        }}
      >
        Fitness Club
      </Typography>
      <Typography
        className="main-tagline"
        sx={{
          fontWeight: 700,
          fontSize: { xs: "30px", sm: "40px", mt: "20px" },
          fontFamily: "Josefin Sans",
        }}
      >
        Sweat, Smile <br /> And Repeat
      </Typography>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "18px",
          mt: "16px",
          mb: "24px",
          fontFamily: "Josefin Sans",
        }}
      >
        Check out the most effective exercises
      </Typography>
      <Button
        variant="contained"
        href="#exercises"
        color="error"
        disableElevation
        sx={{
          background: "#FF2625",
          p: "10px",
          fontSize: "14px",
          letterSpacing: "1.5px",
          fontWeight: 500,
        }}
      >
        Explore Exercises
      </Button>
      <Typography
        className="opacity-tagline"
        sx={{
          fontSize: "150px",
          opacity: "0.1",
          color: "#FF2625",
          fontWeight: 600,
          display: { xs: "none", lg: "block" },
          mt: "50px",
          fontFamily: "Josefin Sans",
        }}
      >
        Exercises
      </Typography>
    </Box>
  );
};

export default HeroBanner;
