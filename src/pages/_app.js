import "waleedLugod/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { AnimatePresence } from "framer-motion";

config.autoAddCss = false;

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.pathname} />
        <Analytics />
      </AnimatePresence>
    </>
  );
}
