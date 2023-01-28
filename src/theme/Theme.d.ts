import '@emotion/react';

import theme from '../theme';

declare module '@emotion/react' {
  export interface Theme {
    colors: typeof theme.colors;
    palette: typeof theme.palette;
    sizing: typeof theme.sizing;
    transition: typeof theme.transition;
  };
}
