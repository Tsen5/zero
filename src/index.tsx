import { ThemeProvider } from '@emotion/react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import Routing from './components/Routing/Routing';

import './localization';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <div>coucou</div>
      {/* <Routing /> */}
    </ThemeProvider>
  </BrowserRouter>
);
