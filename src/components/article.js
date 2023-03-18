import Link from "next/link";
import styles from "waleedLugod/styles/article.module.css";

export default function Article({ title, children }) {
  return (
    <>
      <Link href="/">Home</Link>
      <article className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {children}
      </article>
    </>
  );
}
