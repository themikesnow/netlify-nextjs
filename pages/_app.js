/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from 'react';

// import { Anton } from 'next/font/google';
import { useRouter } from 'next/router';
import { appWithTranslation, useTranslation } from 'next-i18next';
import NProgress from 'nprogress';
import CookieConsent from 'react-cookie-consent';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

// import { ThemeProvider } from '@app-providers';
// import { store } from '@app-store';
// import { AppUtils } from '@app-utils';

import '../styles/global.scss';

NProgress.configure({ showSpinner: false });

// const openSans = Anton({
//   subsets: ['latin'],
//   weight: '400',
//   // display: 'swap',
// });

const App = ({ Component, pageProps: { ...pageProps } }) => {
  useEffect(() => {
    console.log('%c ⛹🏼‍♂️ ✌🏼 Welcome to Clashstats!!!! ✌🏼 ⛹🏼‍♂️', 'color: #ff851a; font-size: large');
    console.log(
      '%c 👨🏼‍🚀 Are you a developer??? That it is so nice! Please, do not break our app!!! :)',
      'color: #ff851a; font-size: x-small'
    );
  }, []);

  const router = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start());
    router.events.on('routeChangeComplete', () => NProgress.done());
    router.events.on('routeChangeError', () => NProgress.done());
  });

  // useEffect(() => {
  //   if (AppUtils.getActiveThemeSelection() === 'dark') {
  //     if (!document.querySelector('body').classList.contains('dark')) {
  //       document.querySelector('body').classList.add('dark');
  //     }
  //   } else {
  //     document.querySelector('body').classList.remove('dark');
  //   }
  // }, []);

  return (
    <>
      {/* <style global jsx>{`
        html {
          font-family: ${openSans.style.fontFamily} !important;
        }
      `}</style> */}
      {/* <Provider store={store}> */}
        {/* <ThemeProvider> */}
          <Component {...pageProps} />
          <ToastContainer className="toaster-container" />
          <CookieConsent
            buttonClasses="button"
            buttonText={t('cookieConsent.accept')}
            containerClasses="cookieConsent"
            contentClasses="content"
            cookieName="cookieConsent"
            disableStyles={true}
            expires={150}
            location="bottom"
          >
            {t('cookieConsent.message')}
          </CookieConsent>
        {/* </ThemeProvider> */}
      {/* </Provider> */}
    </>
  );
};

export default appWithTranslation(App);
