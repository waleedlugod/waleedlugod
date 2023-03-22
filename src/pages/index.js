import Head from "next/head";
import Link from "next/link";
import Screen from "waleedLugod/components/screen";

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
          className={`absolute right-32 bottom-24 text-right font-['Playfair_Display'] text-8xl 
          font-extrabold`}
        >
          <li>
            <Link
              className="link inline-block after:top-[58%] after:border-t-[0.1em]"
              href="/about"
            >
              about
            </Link>
          </li>
          <li>
            <Link
              className="link inline-block after:top-[58%] after:border-t-[0.1em]"
              href="/projects"
            >
              projects
            </Link>
          </li>
          <li>
            <Link
              className="link after:border-t-[0.1em]inline- inline-block after:top-[58%]"
              href="/contact"
            >
              contact
            </Link>
          </li>
        </ul>
      </main>
      <Screen title="Home" />
    </>
  );
}
