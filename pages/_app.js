import { Provider } from 'react-redux'
import Layout from '@/UI/containers/Layout';
import { store } from '@/redux/app';
import '@/styles/globals.scss';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
