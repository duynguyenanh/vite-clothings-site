import { FC } from "react";

import { useIsMobile } from "src/hooks";

import { Cart } from "src/containers";
import { ProductCart } from "src/types";

import { Wrapper } from "./styles";

interface IProps {
  cart: ProductCart[];
}

const Header: FC<IProps> = ({ cart }) => {
  const isMobile = useIsMobile();

  return (
    <Wrapper isMobile={isMobile}>
      <Cart cart={cart} />
    </Wrapper>
  );
};

export default Header;
