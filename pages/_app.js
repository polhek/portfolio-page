// dependencies
import 'tailwindcss/tailwind.css';
import { DefaultSeo } from 'next-seo';

//components
import Layout from '../components/Layout';

//SEO config import...
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
