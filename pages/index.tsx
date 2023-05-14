import HomeMenu from "@/components/Home"
import Head from "next/head"

export default function Home() {
  return (
    <div>
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
  )
}
