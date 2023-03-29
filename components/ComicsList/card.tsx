import { Theme } from "@mui/system";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

import { Comic } from "types/getComics";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

type ComicCardProps = {
  comic: Comic;
};

const styles = (theme: Theme) => ({
  card: {
    display: "block",
    margin: 5,
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
    borderRadius: 0,
  },

  caption: {
    textTransform: "uppercase",
  },

  title: {
    textTransform: "uppercase",
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },

  media: {
    width: "auto",
    height: 300,
    [theme.breakpoints.up("sm")]: {
      width: 1500,
    },
    flexBasis: "50%",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    flexBasis: "50%",
    backgroundColor: "#eee",
  },

  cardText: {
    flex: "1 0 auto",
    marginBottom: 15,
    [theme.breakpoints.up("sm")]: {
      marginBottom: 0,
    },
  },

  linkAction: {
    textDecoration: "none",
    textTransform: "uppercase",
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
});

export const ComicCardTestId = "comic_card";

export const ComicCard = (props: ComicCardProps) => {
  const { comic } = props;

  const { title, id, thumbnail } = comic;
  const image = `${thumbnail.path}.${thumbnail.extension}`;

  const { push } = useRouter();

  return (
    <Card
      sx={{ height: "100%", display: "grid", gridTemplateColumns: "1fr 3fr" }}
      data-testid={ComicCardTestId}
    >
      <CardMedia
        sx={{
          backgroundSize: "cover",
        }}
        image={image}
      />

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Typography variant="caption" gutterBottom fontWeight={700}>
            #{id}
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            sx={{ marginTop: "0.3rem", fontSize: "1rem" }}
          >
            {title}
          </Typography>
        </div>

        <CardActions style={{ padding: 0 }}>
          <Button
            variant="outlined"
            color="error"
            size="small"
            style={{ width: "100%" }}
            onClick={() => push(`/comics/${id}`)}
          >
            See more
          </Button>

          <Button
            variant="contained"
            color="error"
            size="small"
            style={{ width: "100%" }}
          >
            Buy
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};
