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
      <main className="flex h-screen flex-col justify-between">
        <header className="ml-8 mt-12 font-thin sm:ml-24 sm:mt-24">
          <h1 className="text-xl sm:text-4xl">waleed</h1>
          <h1 className=" text-6xl uppercase sm:text-9xl">lugod</h1>
        </header>
        <nav className="mb-12 mr-8 mt-auto flex flex-col gap-3 font-['Playfair_Display'] text-5xl font-extrabold sm:mr-24 sm:mb-24 sm:text-7xl">
          <Link className="link ml-auto w-min after:top-[58%] after:border-t-[0.1em]" href="/about">
            <div className="pointer-events-none">about</div>
          </Link>
          <Link
            className="link ml-auto w-min after:top-[58%] after:border-t-[0.1em]"
            href="/projects"
          >
            <div className="pointer-events-none">projects</div>
          </Link>
          <Link
            className="link ml-auto w-min after:top-[58%] after:border-t-[0.1em]"
            href="/contact"
          >
            <div className="pointer-events-none">contact</div>
          </Link>
        </nav>
      </main>
      <Screen title="Home" />
    </>
  );
}
