import React, { FC } from "react";

import { useIsMobile } from "src/hooks";

import { Wrapper } from "./styles";

interface IProps {
  children: React.ReactNode;
}

const MenuBox: FC<IProps> = ({ children }) => {
  const isMobile = useIsMobile();
  return <Wrapper isMobile={isMobile}>{children}</Wrapper>;
};

export default MenuBox;
