/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from 'react';


import { useRouter } from 'next/router';
import { appWithTranslation, useTranslation } from 'next-i18next';
import NProgress from 'nprogress';
import CookieConsent from 'react-cookie-consent';
import { ToastContainer } from 'react-toastify';


import '../styles/global.scss';

NProgress.configure({ showSpinner: false });



const App = ({ Component, pageProps: { ...pageProps } }) => {
  useEffect(() => {
    console.log('%c ⛹🏼‍♂️ ✌🏼 Welcome!!!! ✌🏼 ⛹🏼‍♂️', 'color: #ff851a; font-size: large');
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

  return (
    <>
      <Component {...pageProps} />
      {/* <ToastContainer className="toaster-container" /> */}
      {/* <CookieConsent
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
      </CookieConsent> */}
    </>
  );
};

export default appWithTranslation(App);
