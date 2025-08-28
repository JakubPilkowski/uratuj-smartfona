/* eslint-disable @next/next/google-font-display */
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pl">
        <Head>
          <meta
            name="description"
            content="Profesjonalny serwis smartfonów w Olsztynie. Naprawa ekranów, baterii, aparatów i innych uszkodzeń. Szybko, tanio, profesjonalnie."
          />
          <meta
            name="keywords"
            content="telefony, akcesoria, serwis, olsztyn, naprawa, centrum, smartphone, etui, case, telefon, promocja, wyprzedaż, rabat"
          />
          <meta name="author" content="Jakub Piłkowski" />
          <link rel="icon" type="image/png" href="uratuj_smartfona.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />

          {/* Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-6YYP4D08H6"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-6YYP4D08H6');
              `,
            }}
          />
        </Head>
        <body style={{ backgroundColor: "var(--color-black)" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
