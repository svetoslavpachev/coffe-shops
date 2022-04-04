import Document, { Html, Main, NextScript, Head } from "next/document";

class MyDocument extends Document {
  render() {
    return <Html lang="en">
      <Head>
        <link rel="preload" href="/fonts/Raleway-Bold.ttf" as="font" crossOrigin="anonympos"></link>
        <link rel="preload" href="/fonts/Raleway-Regular.ttf" as="font" crossOrigin="anonympos"></link>
        <link rel="preload" href="/fonts/Raleway-SemiBold.ttf" as="font" crossOrigin="anonympos"></link>
      </Head>
      <body>
        <Main></Main>
        <NextScript />
      </body>
    </Html>
  }
}

export default MyDocument;
