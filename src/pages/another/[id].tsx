// import Head from 'next/head';
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Hello from "../../components/Hello";
// import { Tournament as PageComponent } from "@app-pages";

// @ts-ignore
const Page = (props) => <Hello {...props} />;

// @ts-ignore
export const getStaticProps = async ({ locale, params }) => {
  // console.log("asldkfjadslkjfaldksf", params);
  return {
    props: {
      // ...(await serverSideTranslations(locale, ["common"])),
      id: params.id,
      // tab: params.id[1] || "",
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
