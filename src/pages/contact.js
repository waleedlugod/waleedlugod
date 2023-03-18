import Article from "waleedLugod/components/article";
import Image from "next/image";
import styles from "waleedLugod/styles/Contact.module.css";

export default function Contact() {
  return (
    <Article title="Contact">
      <main className={styles.content}>
        <section className={styles.section}>
          <Image src="images/email.svg" width={36} height={36} alt="Email symbol" />
          <a href="mailto:lugodwaleed@gmail.com">lugodwaleed@gmail.com</a>
        </section>
        <section className={styles.section}>
          <Image src="images/magnifying-glass.svg" width={36} height={36} alt="Magnifying glass symbol" />
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
