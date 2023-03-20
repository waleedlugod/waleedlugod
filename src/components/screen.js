import { motion, useIsPresent } from "framer-motion";

export default function Screen({ title }) {
  const isPresent = useIsPresent();
  return (
    <motion.div
      key={title}
      className="fixed inset-0 bg-[#52616b]"
      initial={{ scaleX: 1 }}
      animate={{ scaleX: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      exit={{ scaleX: 1, transition: { duration: 0.5, ease: "easeInOut" } }}
      style={{ originX: isPresent ? 0 : 1 }}
    />
  );
}
