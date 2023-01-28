import { FC } from "react";

import useTitle from "../../hooks/useTitle";

const Example: FC = () => {
  useTitle('Example');

  return <>Example page</>;
};

export default Example;
