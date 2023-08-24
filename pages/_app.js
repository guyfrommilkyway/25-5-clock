// import packages below
import { Provider } from 'react-redux';

// import utils below
import store from '@/app/store';

// import assets below
import '@/styles/global.scss';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
