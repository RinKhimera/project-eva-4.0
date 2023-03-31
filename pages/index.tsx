import Head from "next/head";
import HomeMenu from "../components/Home";
import { useSelector } from "react-redux";
import type { RootState } from "@/pages/store";

export default function Home() {
  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  );

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Head>
        <title>
          Samuel Pokam - Software engineer, web developer, and JavaScript
          enthusiast
        </title>
        <meta name="description" content="Samuel Pokam - Portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeMenu />
    </div>
  );
}
