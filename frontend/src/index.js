import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { ThemeProvider } from '@material-ui/styles';

import './static/fonts/font.css';
import './static/styles/common.css';
import './static/styles/reset.css';

import theme from './theme';
import { configureStore } from './store/configureStore';
import Navigation from './modules/Navigation';

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
