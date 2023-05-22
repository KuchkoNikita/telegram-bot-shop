import Home from '@/UI/views/Home';
import { CONTENTFUL_PRODUCT_TYPE } from '@/utils/constants';
import { getDataHomePage } from '@/utils/helpers';

export const getStaticProps = async () => {
  const { products } = await getDataHomePage(CONTENTFUL_PRODUCT_TYPE.home);

  return {
    props: { products },
  };
};

export default Home;
