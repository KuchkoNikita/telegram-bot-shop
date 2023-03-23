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
    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    <script src="https://telegram.org/js/telegram-web-app.js" />
  </Head>
);

export default MetaTags;
