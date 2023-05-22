import ProductsList from '@/UI/views/ProductsList';
import { CONTENTFUL_PRODUCT_TYPE } from '@/utils/constants';
import { getDataProductPage } from '@/utils/helpers';

export const getStaticProps = async () => {
  const { tags, products, contenTextPopup } = await getDataProductPage(CONTENTFUL_PRODUCT_TYPE.pod);

  return {
    props: {
      tags,
      products,
      contenTextPopup,
    },
  };
};

export default ProductsList;
