import Head from 'next/head';

const MetaTags = ({
  metaTitle,
  metaDescription,
}) => (
  <Head>
    <title>{metaTitle}</title>
    <meta name="description" content={metaDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    <script src="https://telegram.org/js/telegram-web-app.js" />
  </Head>
);

export default MetaTags;
