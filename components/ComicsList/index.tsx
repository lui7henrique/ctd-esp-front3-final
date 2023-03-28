import Grid from "@mui/material/Grid";
import { Comic } from "types/getComics";
import { ComicCard } from "../ComicCard";

type ComicsListProps = {
  comics: Array<Comic>;
};

export const ComicsList = (props: ComicsListProps) => {
  const { comics } = props;

  return (
    <>
      <Grid container spacing={2} paddingY={2}>
        {comics.map((comic) => {
          return (
            <Grid item xs={4}>
              <ComicCard comic={comic} key={comic.id} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
