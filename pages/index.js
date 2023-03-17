import Home from '@/UI/views/Home';
import { getEntriesByTypeAndSlug } from "@/utils/contentfull";

export const getStaticProps = async () => {
  const [page] = await getEntriesByTypeAndSlug("page");

  return {
    props: {
      page
    },
  };
};

export default Home;
