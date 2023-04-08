import { FaqTemplate } from "dh-marvel/components/FaqTemplate";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import { NextPage } from "next";
import Head from "next/head";

const Faq: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BodySingle>
        <FaqTemplate />
      </BodySingle>
    </>
  );
};

export default Faq;
