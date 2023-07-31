import React, { FC } from "react";

import { useIsMobile } from "src/hooks";

import { Wrapper } from "./styles";

const Header: FC = () => {
  const isMobile = useIsMobile();

  return <Wrapper isMobile={isMobile}></Wrapper>;
};

export default Header;
