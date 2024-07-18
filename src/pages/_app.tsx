import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { montserrat, roboto } from "./fonts"; // Importando as configurações de fonte

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${montserrat.className} ${roboto.className}`}>
      <Component {...pageProps} />
    </main>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

