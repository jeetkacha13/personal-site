import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Jeet Kacha | Frontend Developer</title>
        <meta
          property="og:title"
          content="Jeet Kacha | Frontend Developer"
          key="title"
        />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-between p-10">
        <div className="container mx-auto px-4">
          <h1>Jeet Kacha.</h1>
          <p> Frontend Developer. </p>
        </div>
      </main>
    </>
  );
}
