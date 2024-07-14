import "@/styles/globals.css";
import type { AppProps } from "next/app";
// import { appWithTranslation } from "next-i18next";
// import nextI18NextConfig from "../../next-i18next.config.mjs";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

// export default appWithTranslation(App, nextI18NextConfig);
// export default appWithTranslation(App);
export default App;
