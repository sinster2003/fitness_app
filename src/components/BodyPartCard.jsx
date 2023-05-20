import { Stack, Typography } from "@mui/material";
import { categories } from "./../assets/icons/icons";

const BodyPartCard = ({ item, bodyPart, setBodyPart, index }) => {
  return (
    <Stack
      type="button"
      direction="column"
      alignItems="center"
      justifyContent="center"
      className="body-part-card"
      sx={{
        borderTop: bodyPart === item && "4px solid #ff2526",
        background: "#fff",
        width: { xs: "150px", lg: "200px" },
        height: { xs: "160px", lg: "210px" },
        gap: "20px",
        cursor: "pointer",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1600, behavior: "smooth" });
      }}
    >
      <img
        src={categories[index].icon}
        alt={categories[index].icon + "icon"}
        style={{ width: "60px", height: "60px" }}
      />
      <Typography
        sx={{
          color: "#3A1212",
          fontSize: "24px",
          fontFamily: "Josefin Sans",
          textTransform: "capitalize",
          fontWeight: "bold",
        }}
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPartCard;
