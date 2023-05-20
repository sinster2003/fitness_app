import { Stack, Typography } from "@mui/material";
import bodyPartImg from "./../assets/icons/body-part.png";
import targetImg from "./../assets/icons/target.png";
import equipmentImg from "./../assets/icons/equipment.png";
import ImageStack from "./ImageStack";

const Detail = ({ exercisedetail }) => {
  const { id, name, target, bodyPart, equipment, gifUrl } = exercisedetail;

  const nameLength = name?.length;

  return (
    <Stack
      direction="column"
      gap="80px"
      sx={{
        flexDirection: {
          lg: "row",
          justifyContent: "space-between",
          alignItems: "center",
          p: "20px",
        },
      }}
    >
      <img
        className="gif-img"
        src={gifUrl}
        alt="exercise"
        style={{ objectFit: "cover" }}
      />
      <Stack
        direction="column"
        justifyContent="center"
        gap="20px"
        sx={{
          alignItems: { xs: "center", lg: "flex-start" },
        }}
      >
        <Typography
          fontWeight={700}
          textTransform="capitalize"
          fontFamily="Josefin Sans"
          color="#3A1212"
          sx={{ fontSize: { xs: "32px", sm: "48px", lg: "60px" } }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "18px", sm: "20px", lg: "22px" },
            fontFamily: "Josefin Sans",
            textAlign: { xs: "justify", lg: "start" },
            mx: { sm: "50px", lg: "0" },
          }}
        >
          Exercise makes your stronger. {name?.slice(0, 1).toUpperCase()}
          {name?.slice(1, nameLength)} is one of the best exercises to target
          your {target}. It will help you improve your mood and energy.
        </Typography>
        <ImageStack imgSrc={bodyPartImg} bodypartName={bodyPart} />
        <ImageStack imgSrc={targetImg} bodypartName={target} />
        <ImageStack imgSrc={equipmentImg} bodypartName={equipment} />
      </Stack>
    </Stack>
  );
};

export default Detail;
