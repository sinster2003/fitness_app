import { useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { fetchFromApi } from "../utils/fetchData";
import { HorizontalScrollBar } from "./";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    fetchFromApi("exercises/bodyPartList").then((bodyPartsData) =>
      setBodyParts(["all", ...bodyPartsData])
    );
  }, []);

  const handleSearch = async () => {
    try {
      if (search) {
        const exerciseData = await fetchFromApi("exercises");

        const searchedExercises = exerciseData.filter(
          (exercise) =>
            exercise.name.toLowerCase().includes(search) ||
            exercise.equipment.toLowerCase().includes(search) ||
            exercise.target.toLowerCase().includes(search) ||
            exercise.bodyPart.toLowerCase().includes(search)
        );

        setExercises(searchedExercises);
        setSearch("");
        window.scrollTo({ top: 1600, behavior: "smooth" });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      p={{ xs: "20px", lg: "20px 0 20px 20px" }}
      mt={{ xs: "32px", lg: "64px" }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: { xs: "28px", lg: "40px" },
          fontFamily: "Josefin Sans",
          textAlign: "center",
          my: { xs: "35px", lg: "48px" },
          mt: { xs: "40px", lg: "0" },
        }}
      >
        Awesome Exercise You <br /> Should Know
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <TextField
          placeholder="Search Exercises..."
          color="error"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          sx={{
            borderRadius: 0,
            width: { xs: "50%", lg: "80%" },
            height: { xs: "40px", lg: "50px" },
            input: {
              p: { xs: "8.5px", lg: "13.5px" },
              fontWeight: 600,
              fontFamily: "Josefin Sans",
            },
          }}
        />
        <Button
          className="search-btn"
          disableElevation
          onClick={handleSearch}
          sx={{
            background: "#FF2625",
            color: "#fff",
            p: "12px",
            fontSize: { xs: "12px", lg: "14px" },
            letterSpacing: { lg: "1.5px" },
            fontWeight: 500,
            height: { xs: "40px", lg: "50px" },
            width: "20%",
            borderRadius: 0,
          }}
        >
          Search
        </Button>
      </Stack>
      <Box
        sx={{
          position: "relative",
          px: "20px",
          pb: "30px",
          width: "100%",
          scrollBehavior: "smooth",
        }}
      >
        <HorizontalScrollBar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyParts="true"
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
