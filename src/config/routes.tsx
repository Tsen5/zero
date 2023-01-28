import Example from '../pages/Example/Example';
import { RouteConfig, RouteName } from '../types/routes';

const routes: Record<RouteName, RouteConfig> = {
  [RouteName.EXAMPLE]: {
    path: 'example',
    element: <Example />,
  },
};

export default routes;
