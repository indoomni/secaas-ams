import '@/styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import Head from "next/head";

import "./utils_logger"
import "./utils_localStorage"
import "./utils_user"

export default function MyApp({ Component, pageProps }) {
  return (
    <PlasmicRootProvider Head={Head}>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}
