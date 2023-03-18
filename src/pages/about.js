import Link from "next/link";
import styles from "waleedLugod/styles/utils.module.css";

export default function About() {
  return (
    <>
      <Link className={styles.homeLink} href="/">
        Home
      </Link>
      <article className={styles.content}>
        <h1 className={styles.title}>About</h1>
        <div className={styles.line}></div>
        <p>stuff stuff and other stuff</p>
      </article>
    </>
  );
}
