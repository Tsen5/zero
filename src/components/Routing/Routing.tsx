import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import App from "../../App";
import routes from "../../config/routes";

const Routing: FC = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route path={routes.example.path} element={routes.example.element} />
    </Route>
  </Routes>
);

export default Routing;
