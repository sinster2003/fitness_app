import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Button,
  Stack,
  Typography,
} from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          background: "#fff",
          cursor: "pointer",
          p: "15px",
          height: { xs: "470px", sm: "500px" },
          width: { xs: "320px", sm: "auto" },
        }}
      >
        <CardMedia
          image={exercise.gifUrl}
          sx={{
            width: { xs: "250px", sm: "300px" },
            height: { xs: "260px", sm: "310px" },
            margin: "auto",
          }}
        />
        <CardContent sx={{ py: "0px" }}>
          <Stack direction="row" gap="20px">
            <Button
              sx={{
                color: "#000",
                background: "#ffd4cf",
                borderRadius: "30px",
                p: "12px",
                fontSize: "12px",
                fontWeight: 600,
              }}
            >
              {exercise.bodyPart}
            </Button>
            <button
              className="exercise-button-card"
              style={{
                color: "#fff",
                background: "#fc6b5d",
                borderRadius: "30px",
                padding: "10px",
                fontSize: "12px",
                minWidth: "60px",
                fontWeight: 600,
                fontFamily: "Roboto,Helvetica,Arial,sans-serif",
                textTransform: "uppercase",
                border: "none",
                outline: "none",
              }}
            >
              {exercise.target}
            </button>
          </Stack>
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: "bold",
              fontFamily: "Josefin Sans",
              color: "#000",
              textTransform: "capitalize",
              mt: "30px",
              width: "300px",
            }}
          >
            {exercise.name}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ExerciseCard;
