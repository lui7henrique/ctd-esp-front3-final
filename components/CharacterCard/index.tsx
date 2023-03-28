import { Theme } from "@mui/system";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

import { Result } from "types/getCharacter";

type CharacterCardProps = {
  character: Result;
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

export const CharacterCard = (props: CharacterCardProps) => {
  const { character } = props;

  const { description, name, id, thumbnail } = character;
  const image = `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <Card>
      <CardMedia
        sx={{
          height: 200,
        }}
        image={image}
      />

      <CardContent>
        <div>
          <Typography variant="caption" gutterBottom>
            #{id}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {name}
          </Typography>
          <Typography variant="body1">{description}</Typography>
        </div>
        <CardActions style={{ padding: 0 }}>
          <Typography variant="body1">
            {/* <a className={classes.linkAction}>Read more</a> */}
          </Typography>
        </CardActions>
      </CardContent>
    </Card>
  );
};
