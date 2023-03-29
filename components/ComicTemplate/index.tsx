import { Comic } from "types/getComic";

type ComicProps = {
  comic: Comic;
};

export const ComicTemplate = (props: ComicProps) => {
  const { comic } = props;

  return (
    <>
      <pre>{JSON.stringify(comic, null, 2)}</pre>
    </>
  );
};
