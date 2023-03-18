import Link from "next/link";
import Article from "waleedLugod/components/article";
import styles from "waleedLugod/styles/Projects.module.css";

export default function Projects() {
  return (
    <Article title="Projects">
      <ul className={styles.projectList}>
        <li>
          <a href="https://interactive.theguidon.com/2023/02/from-the-hill-to-edsa">
            <h2>From the Hill to EDSA</h2>
            <h3>The GUIDON | 2023</h3>
          </a>
        </li>
      </ul>
    </Article>
  );
}
