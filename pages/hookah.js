import Home from '@/UI/views/Home';
import { getEntriesByTypeAndSlug } from '@/utils/contentfull';
import { CONTENTFUL_CONTENT_TYPE, CONTENTFUL_PRODUCT_TYPE } from '@/utils/constants';

export const getStaticProps = async () => {
  const [page] = await getEntriesByTypeAndSlug(
    CONTENTFUL_CONTENT_TYPE.page,
    CONTENTFUL_PRODUCT_TYPE.hookah,
  );

  const contenTextPopup = await getEntriesByTypeAndSlug(
    CONTENTFUL_CONTENT_TYPE.text,
  );

  return {
    props: {
      page,
      contenTextPopup,
    },
  };
};

export default Home;
