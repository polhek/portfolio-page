import 'tailwindcss/tailwind.css';
import { DefaultSeo } from 'next-seo';

//SEO config import...
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
