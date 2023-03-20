import Home from '@/UI/views/Home';
import { getEntriesByTypeAndSlug } from "@/utils/contentfull";
import { CONTENTFUL_CONTENT_TYPE, CONTENTFUL_PRODUCT_TYPE } from '@/utils/constants';

export const getStaticProps = async () => {
  const [page] = await getEntriesByTypeAndSlug(
    CONTENTFUL_CONTENT_TYPE.page,
    CONTENTFUL_PRODUCT_TYPE.pod,
  );

  const text = await getEntriesByTypeAndSlug(
    CONTENTFUL_CONTENT_TYPE.text,
  );

  console.log('text: ', text);

  return {
    props: {
      page,
      text
    },
  };
};

export default Home;
