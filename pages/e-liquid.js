import Home from '@/UI/views/Home';
import { CONTENTFUL_PRODUCT_TYPE } from '@/utils/constants';
import { getDataProductPage } from '@/utils/helpers';

export const getStaticProps = async () => {
  const { tags, products, contenTextPopup } = await getDataProductPage(CONTENTFUL_PRODUCT_TYPE.eLiquid);

  return {
    props: {
      tags,
      products,
      contenTextPopup,
    },
  };
};

export default Home;
