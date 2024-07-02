import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Adicione o link para o ícone aqui */}
        <link rel="icon" href="/logo.ico" />
        <title>FFsolutec</title>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VWW2K7GRMH"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VWW2K7GRMH');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
