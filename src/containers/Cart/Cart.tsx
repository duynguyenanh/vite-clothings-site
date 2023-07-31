import React, { FC, useMemo, useState, useCallback } from "react";

import { Icon, MenuBox } from "src/components";
import { useIsMobile } from "src/hooks";
import { CartItem } from "src/containers";
import { ICON_NAMES, ProductCart } from "src/types";

import {
  Wrapper,
  CartTextWrapper,
  BottomCartCover,
  MenuWrapper,
} from "./styles";

interface IProps {
  cart: ProductCart[];
}

const Cart: FC<IProps> = ({ cart }) => {
  const [isActive, setIsActive] = useState(false);
  const isMobile = useIsMobile();

  const noOfItemText = useMemo(() => {
    return (
      <CartTextWrapper isActive={isActive}>{`${isMobile ? "" : "My Cart "} ( ${
        cart.length
      } )`}</CartTextWrapper>
    );
  }, [cart.length, isActive, isMobile]);

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
      {isActive && (
        <MenuBox>
          {cart.map((item) => (
            <CartItem cartItem={item} key={item.size.id} />
          ))}
        </MenuBox>
      )}
    </>
  );
};

export default Cart;
