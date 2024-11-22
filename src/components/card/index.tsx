import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
  SxProps,
} from "@mui/material";

type CardProps = {
  title: string;
  subtitle?: string;
  image?: string;
  description: string;
};

const defaultSx: SxProps = {
  width: "25%",
  border: "1px solid black",
};

const index: React.FC<CardProps> = ({ title, subtitle, image, description }) => {
  return (
    <Card sx={defaultSx}>
      {image && (
        <CardMedia
          sx={{ width: "100%", height: 150 }}
          title="green iguana"
          image={image}
        />
      )}
      <CardContent sx={{ padding: 1 }}>
        <Typography variant="body1" color="text.primary">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {subtitle && subtitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => alert("Clicou")}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
export default index;
