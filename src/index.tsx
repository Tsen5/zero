import { ThemeProvider } from '@emotion/react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import Routing from './components/Routing/Routing';

import './localization';
import { store } from './store';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div>coucou</div>
        {/* <Routing /> */}
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
