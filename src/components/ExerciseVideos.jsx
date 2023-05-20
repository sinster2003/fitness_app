import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Loader from "./Loader";

const ExerciseVideos = ({ videos, name }) => {
  if (videos?.length === 0) return <Loader />;
  return (
    <Box mt="60px" mb="100px">
      <Typography
        sx={{
          fontSize: { xs: "32px", md: "40px", lg: "48px" },
          fontFamily: "Josefin Sans",
          marginTop: { xs: "80px", lg: "0" },
          textAlign: { xs: "center", lg: "start" },
        }}
      >
        Watch <span style={{ color: "#ff2526" }}>{name}</span> videos
      </Typography>
      <Stack
        alignItems="center"
        flexWrap="wrap"
        justifyContent="center"
        sx={{
          flexDirection: { lg: "row" },
          gap: "50px",
          textDecoration: "none",
        }}
      >
        {videos?.slice(0, 6).map((item, index) => {
          return (
            <a
              className="video-link"
              key={index}
              href={`https://www.youtube.com/watch?v=${item.video?.videoId}`}
              target="_blank"
              rel="noreferrer"
              style={{
                width: "400px",
                height: "320px",
                textDecoration: "none",
              }}
            >
              <img
                className="video-img"
                src={item.video?.thumbnails[0]?.url}
                alt={item.video?.title}
                style={{ width: "400px", height: "290px", objectFit: "cover" }}
              />
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "#000",
                  fontFamily: "Josefin Sans",
                }}
              >
                {item.video?.title?.slice(0, 20)}
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "gray",
                  fontFamily: "Josefin Sans",
                }}
              >
                {item.video?.channelName}
              </Typography>
            </a>
          );
        })}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
