import Head from "next/head";
import Link from "next/link";
import Screen from "waleedLugod/components/screen";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({ subsets: ["latin"], adjustFontFallback: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Waleed Lugod</title>
        <meta name="description" content="Portfolio of Waleed Lugod" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header className="p-24 font-thin">
          <h1 className="text-4xl">waleed</h1>
          <h1 className="text-9xl uppercase">lugod</h1>
        </header>
        <ul
          className={`${playfairDisplay.className} absolute right-32 bottom-24 text-right text-8xl
          font-extrabold`}
        >
          <li>
            <Link className="home-nav-link" href="/about">
              about
            </Link>
          </li>
          <li>
            <Link className="home-nav-link" href="/projects">
              projects
            </Link>
          </li>
          <li>
            <Link className="home-nav-link" href="/contact">
              contact
            </Link>
          </li>
        </ul>
      </main>
      <Screen title="Home" />
    </>
  );
}
