import { Theme } from "@mui/system";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

import { Comic } from "types/getComics";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { useCart } from "context/Cart";

type ComicCardProps = {
  comic: Comic;
};

export const ComicCardTestId = "comic_card";

export const ComicCard = (props: ComicCardProps) => {
  const { comic } = props;

  const { push } = useRouter();
  const { handleAddComicToCart } = useCart();

  const { title, id, thumbnail, prices } = comic;
  const image = `${thumbnail.path}.${thumbnail.extension}`;
  const price = prices[0].price;

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
            onClick={() => handleAddComicToCart(comic)}
            disabled={!price}
          >
            Buy
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};
