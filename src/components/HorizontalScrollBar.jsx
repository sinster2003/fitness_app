import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { BodyPartCard, ExerciseCard } from "./";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import ArrowLeft from "../assets/icons/left-arrow.png";
import ArrowRight from "../assets/icons/right-arrow.png";
import Loader from "./Loader";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography
      onClick={() => scrollPrev()}
      position="absolute"
      bottom="0"
      zIndex="10"
      sx={{
        left: { xs: "35%", md: "40%" },
      }}
    >
      <img
        src={ArrowLeft}
        className="left-arrow"
        style={{
          width: "30px",
          height: "30px",
          cursor: "pointer",
        }}
        alt="left"
      />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography
      onClick={() => scrollNext()}
      position="absolute
    "
      bottom="0"
      zIndex="10"
      sx={{
        right: { xs: "35%", md: "40%" },
      }}
    >
      <img
        src={ArrowRight}
        className="right-arrow"
        style={{ width: "30px", height: "30px", cursor: "pointer" }}
        alt="right"
      />
    </Typography>
  );
};

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  if (!data?.length === 0) return <Loader />;
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item, index) => {
        return (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            sx={{
              mx: { xs: "10px", sm: "30px", lg: "50px" },
              mt: "60px",
              mb: { xs: "30px", lg: "50px" },
            }}
          >
            {isBodyParts ? (
              <BodyPartCard
                item={item}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
                index={index}
              />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </Box>
        );
      })}
    </ScrollMenu>
  );
};

export default HorizontalScrollBar;
