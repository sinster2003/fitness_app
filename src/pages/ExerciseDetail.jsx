import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Detail, ExerciseVideos, SimilarVideos } from "./../components";
import { fetchFromApi } from "./../utils/fetchData";
import { useParams } from "react-router-dom";
import { fetchVideos } from "../utils/fetchVideos";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [videos, setVideos] = useState([]);
  const [targetVideos, setTargetVideos] = useState([]);
  const [equipmentVideos, setEquipmentVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchDataApi = async () => {
      const exerciseData = await fetchFromApi(`exercises/exercise/${id}`);
      setExerciseDetail(exerciseData);

      fetchVideos(`search?query=${exerciseData.name} tutorials`).then(
        (data) => {
          setVideos(data.contents);
        }
      );

      fetchFromApi(`exercises/target/${exerciseData.target}`).then((data) => {
        setTargetVideos(data);
      });

      fetchFromApi(`exercises/equipment/${exerciseData.equipment}`).then(
        (data) => {
          setEquipmentVideos(data);
        }
      );
    };

    fetchDataApi();
  }, [id]);

  return (
    <Box mt="60px" sx={{ mx: { xs: "20px", lg: "0" } }}>
      <Detail exercisedetail={exerciseDetail} />
      <ExerciseVideos videos={videos} name={exerciseDetail.name} />
      <SimilarVideos target={targetVideos} equipment={equipmentVideos} />
    </Box>
  );
};

export default ExerciseDetail;
