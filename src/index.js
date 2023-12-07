import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from 'components/App';
import { GlobalStyles } from 'components/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/test-rent-car">
        <App />
        </BrowserRouter>
      <GlobalStyles/>
    </Provider>
  </React.StrictMode>
);
