import React, { FC } from "react";

import { useIsMobile } from "src/hooks";

import { Cart } from "src/containers";

import { Wrapper } from "./styles";

interface IProps {
  noOfItems: number;
}

const Header: FC<IProps> = ({ noOfItems }) => {
  const isMobile = useIsMobile();

  return (
    <Wrapper isMobile={isMobile}>
      <Cart noOfItems={noOfItems} />
    </Wrapper>
  );
};

export default Header;
