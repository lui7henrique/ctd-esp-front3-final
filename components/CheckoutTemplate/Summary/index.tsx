import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useCart } from "../../../context/Cart";
import { formatCurrency } from "../../../utils/currency/format";

export const summaryTestId = "summary";

export const Summary = () => {
  const { cart } = useCart();

  if (!cart) {
    return <p data-testid={summaryTestId}>no comic on cart.</p>;
  }

  const { title, id, thumbnail, prices } = cart;
  const image = `${thumbnail.path}.${thumbnail.extension}`;
  const price = prices[0].price;

  return (
    <Card
      sx={{ display: "grid", gridTemplateColumns: "2fr 3fr" }}
      data-testid={summaryTestId}
    >
      <Box
        width="100%"
        sx={{
          aspectRatio: "9 / 16",
        }}
      >
        <CardMedia
          sx={{
            backgroundSize: "cover",
            height: "100%",
          }}
          image={image}
        />
      </Box>

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="caption" gutterBottom fontWeight={700}>
              #{id}
            </Typography>

            <Typography variant="caption" gutterBottom fontWeight={700}>
              {formatCurrency(price)}
            </Typography>
          </Box>

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
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            color="error"
            size="small"
            style={{ width: "100%" }}
            type="submit"
          >
            Finish
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};
