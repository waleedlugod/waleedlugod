import Link from "next/link";
import Script from "next/script";
import styles from "waleedLugod/styles/article.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Article({ title, children }) {
  return (
    <>
      <Script src="https://kit.fontawesome.com/2b3ddf982d.js" crossOrigin="anonymous" />
      <Link className={styles.homeLink} href="/">
        <FontAwesomeIcon icon={faHouse} />
      </Link>
      <article className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {children}
      </article>
    </>
  );
}
