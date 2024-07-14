import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { t } = useTranslation();
  return (
    <div>
      aksdjflkadjsfklj WHAT
      <div>{t("common:description")}</div>
      <div>{t("hello:description")}</div>
    </div>
  );
}
