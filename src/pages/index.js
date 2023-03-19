import Head from "next/head";
import Link from "next/link";
import Screen from "waleedLugod/components/screen";
import styles from "waleedLugod/styles/Home.module.css";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Waleed Lugod</title>
        <meta name="description" content="Portfolio of Waleed Lugod" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <header className={styles.name}>
          <h1>waleed</h1>
          <h1>lugod</h1>
        </header>
        <ul className={[`${styles.pages} ${playfairDisplay.className}`]}>
          <li>
            <Link href="/about">about</Link>
          </li>
          <li>
            <Link href="/projects">projects</Link>
          </li>
          <li>
            <Link href="/contact">contact</Link>
          </li>
        </ul>
      </main>
      <Screen title="Home" />
    </>
  );
}
