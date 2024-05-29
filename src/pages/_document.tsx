import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Adicione o link para o ícone aqui */}
        <link rel="icon" href="/logo.ico" />
        <title>FFsolutec</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
