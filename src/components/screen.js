import { motion, useIsPresent } from "framer-motion";
import styles from "waleedLugod/styles/screen.module.css";

export default function Screen({ title }) {
  const isPresent = useIsPresent();
  return (
    <motion.div
      key={title}
      className={styles.screen}
      initial={{ scaleX: 1 }}
      animate={{ scaleX: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      exit={{ scaleX: 1, transition: { duration: 0.5, ease: "easeInOut" } }}
      style={{ originX: isPresent ? 0 : 1 }}
    />
  );
}
