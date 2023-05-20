import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import Pagination from "@mui/material/Pagination";
import { fetchFromApi } from "../utils/fetchData";
import Loader from "./Loader";

const Exercises = ({ exercises, bodyPart, setExercises }) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (bodyPart === "all") {
      fetchFromApi(`exercises`).then((data) => {
        setExercises(data);
      });
    } else {
      fetchFromApi(`exercises/bodyPart/${bodyPart}`).then((data) => {
        setExercises(data);
      });
    }
  }, [bodyPart]);

  if (exercises?.length === 0) return <Loader />;

  const perPage = 9;
  const indexOfLastExercise = currentPage * perPage;
  const indexOfFirstExercise = indexOfLastExercise - perPage;
  const currentExercisesPerPage = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1600, behavior: "smooth" });
  };

  return (
    <Box id="exercises" sx={{ mt: "60px" }}>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Josefin Sans",
          textAlign: { xs: "center", lg: "start" },
        }}
      >
        Showing Results
      </Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        gap="50px"
        mt="60px"
      >
        {currentExercisesPerPage.map((exercise, index) => {
          return <ExerciseCard key={index} exercise={exercise} />;
        })}
      </Stack>
      <Stack mt="30px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            count={Math.ceil(exercises.length / perPage)}
            defaultPage={1}
            size="medium"
            page={currentPage}
            onChange={paginate}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
