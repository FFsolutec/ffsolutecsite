// import "@/sass/principal.scss";
import type { AppProps } from "next/app";
import "@/sass/principal.scss";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
