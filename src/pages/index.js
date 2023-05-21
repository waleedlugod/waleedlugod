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
      <main className="">
        <header className="absolute left-10 top-10 font-thin sm:left-20 sm:top-20">
          <h1 className="text-xl sm:text-4xl">waleed</h1>
          <h1 className=" text-6xl uppercase sm:text-9xl">lugod</h1>
        </header>
        <nav className=" absolute right-10 bottom-10 flex flex-col gap-3 font-['Playfair_Display'] text-5xl font-extrabold sm:right-20 sm:bottom-20 sm:text-7xl">
          <Link className="link ml-auto w-min after:top-[58%] after:border-t-[0.1em]" href="/about">
            <div className="pointer-events-none">about</div>
          </Link>
          <Link className="link ml-auto w-min after:top-[58%] after:border-t-[0.1em]" href="/projects">
            <div className="pointer-events-none">projects</div>
          </Link>
          <Link className="link ml-auto w-min after:top-[58%] after:border-t-[0.1em]" href="/contact">
            <div className="pointer-events-none">contact</div>
          </Link>
        </nav>
      </main>
      <Screen title="Home" />
    </>
  );
}
