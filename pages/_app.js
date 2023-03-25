import { Provider } from 'react-redux'
import { Roboto } from '@next/font/google'
import Layout from '@/UI/containers/Layout';
import { store } from '@/redux/app';
import '@/styles/globals.scss';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout className={roboto.className}>
        <Component
          {...pageProps}
          className={roboto.className}
        />
      </Layout>
    </Provider>
  );
}
