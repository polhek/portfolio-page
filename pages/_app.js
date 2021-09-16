// dependencies
// import 'tailwindcss/tailwind.css';
import '../public/styles/globals.css';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';

//components
import Layout from '../components/Layout';

//SEO config import...
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
        />
        lang="en"
      </Head>
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
