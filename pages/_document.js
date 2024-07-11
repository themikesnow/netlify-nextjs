// import { SpeedInsights } from '@vercel/speed-insights/next';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link crossOrigin="true" href="https://fonts.gstatic.com" rel="preconnect" />
          <link
            href="https://fonts.googleapis.com/css?family=Alegreya+Sans+SC&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Anton&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="dark">
          <Main />
          <NextScript />
          <Script
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCt_6pXPu004Rq00DY97j_hReTLTnyRS7E"
            strategy="beforeInteractive"
          />
          <div id="modal" />
          {/* <SpeedInsights /> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
