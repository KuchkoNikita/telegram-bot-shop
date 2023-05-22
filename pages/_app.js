import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Roboto } from '@next/font/google';
import Layout from '@/UI/containers/Layout';
import { store, persistor } from '@/redux/store';
import '@/styles/globals.scss';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <Layout className={roboto.className}>
          <Component
            {...pageProps}
            className={roboto.className}
          />
        </Layout>
      </PersistGate>
    </Provider>
  );
}
