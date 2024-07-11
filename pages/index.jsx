import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Dummy } from '@app-pages';

const IndexPage = () => <Dummy />;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'index'])),
  },
});

export default IndexPage;
