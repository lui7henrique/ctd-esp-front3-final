import type { GetStaticProps, NextPage, GetStaticPaths } from "next";
import Head from "next/head";

import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import { marvel } from "dh-marvel/services/marvel/marvel.service";
import { getFirstTwelveComics } from "utils/comics/getFirstTwelveComics";
import { GetComic, Comic } from "types/getComic";
import { ComicTemplate } from "dh-marvel/components/ComicTemplate";

type IndexProps = {
  comic: Comic;
};

const Index: NextPage<IndexProps> = (props) => {
  const { comic } = props;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BodySingle>
        <ComicTemplate comic={comic} />
      </BodySingle>
    </>
  );
};

export default Index;

type Params = {
  id: string;
};

type CustomProps = {};

const redirect = {
  props: {},
  redirect: {
    destination: "/",
    permanent: true,
  },
};

export const getStaticPaths: GetStaticPaths = async () => {
  const comics = await getFirstTwelveComics();

  const paths = comics.map((comic) => {
    return {
      params: {
        id: String(comic.id),
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<CustomProps, Params> = async (
  context
) => {
  const { params } = context;

  const id = params?.id;

  try {
    const {
      data: {
        data: { results },
      },
    } = await marvel.get<GetComic>(`/comics/${id}`);
    const comic = results[0];

    return {
      props: { comic },
    };
  } catch {
    return {
      props: {},
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};