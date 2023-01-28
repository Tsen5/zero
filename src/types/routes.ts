import { ReactElement } from 'react';

export const enum RouteName {
  EXAMPLE = 'example',
}

export interface RouteConfig {
  path: string;
  element: ReactElement;
}
