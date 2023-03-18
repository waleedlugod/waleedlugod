import Article from "waleedLugod/components/article";
import styles from "waleedLugod/styles/Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <Article title="Contact">
      <main className={styles.content}>
        <section className={styles.section}>
          <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
          <a href="mailto:lugodwaleed@gmail.com">lugodwaleed@gmail.com</a>
        </section>
        <section className={styles.section}>
          <FontAwesomeIcon className={styles.icon} icon={faMagnifyingGlass} />
          <a href="https://github.com/waleedlugod">github</a>
          &nbsp;/&nbsp;
          <a href="https://www.linkedin.com/in/waleedlugod/">linkedin</a>
          &nbsp;/&nbsp;
          <a href="https://twitter.com/waleedlugod">twitter</a>
          &nbsp;/&nbsp;
          <a href="https://www.facebook.com/wwwlugod">facebook</a>
          &nbsp;/&nbsp;
          <a href="https://www.instagram.com/waleed.lugod/">instagram</a>
        </section>
      </main>
    </Article>
  );
}
