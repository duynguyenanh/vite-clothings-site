import React, { FC, useMemo, useState, useCallback } from "react";

import { Icon, MenuBox } from "src/components";
import { useIsMobile } from "src/hooks";

import { ICON_NAMES } from "src/types";

import {
  Wrapper,
  CartTextWrapper,
  BottomCartCover,
  MenuWrapper,
} from "./styles";

interface IProps {
  noOfItems: number;
}

const Cart: FC<IProps> = ({ noOfItems = 0 }) => {
  const [isActive, setIsActive] = useState(false);
  const isMobile = useIsMobile();

  const noOfItemText = useMemo(() => {
    return (
      <CartTextWrapper isActive={isActive}>{`${
        isMobile ? "" : "My Cart "
      } ( ${noOfItems} )`}</CartTextWrapper>
    );
  }, [noOfItems, isActive, isMobile]);

  const CartIcon = useMemo(() => {
    return isMobile ? (
      <Icon name={isActive ? ICON_NAMES.cartActive : ICON_NAMES.cart} />
    ) : (
      ""
    );
  }, [isActive, isMobile]);

  const onClickCart = useCallback(() => {
    setIsActive((prev) => !prev);
  }, []);

  return (
    <>
      <Wrapper onClick={onClickCart} isActive={isActive}>
        <MenuWrapper isActive={isActive}>
          {CartIcon}
          {noOfItemText}
        </MenuWrapper>
        {isActive && <BottomCartCover />}
      </Wrapper>
      {isActive && <MenuBox />}
    </>
  );
};

export default Cart;
