// import Head from 'next/head';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// import { Tournament as PageComponent } from '@app-pages';
import { Dummy } from "@app-pages";

const Page = (props) => <Dummy {...props} />;

export const getStaticProps = async ({ locale, params }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "errors",
        "tournament",
        "tournaments",
      ])),
      value: params.id[0],
      tab: params.id[1] || "",
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export default Page;
