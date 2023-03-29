import { marvel } from "dh-marvel/services/marvel/marvel.service";
import { GetComics } from "types/getComics";

export const getFirstTwelveComics = async () => {
  const {
    data: {
      data: { results },
    },
  } = await marvel.get<GetComics>("/comics", {
    params: { format: "comic", limit: 100 },
  });

  const comics = results
    .filter((comic) => {
      const image = comic.images[0];
      const isNotFound = image?.path.includes("56f");

      return image && !isNotFound;
    })
    .slice(0, 12);

  return comics;
};
