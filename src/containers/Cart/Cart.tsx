import { FC, useMemo, useState, useCallback } from "react";

import { Icon, MenuBox } from "src/components";
import { useIsMobile } from "src/hooks";
import { CartItem } from "src/containers";
import { ICON_NAMES, ProductCart } from "src/types";

import {
  Wrapper,
  CartTextWrapper,
  BottomCartCover,
  MenuWrapper,
  Text,
} from "./styles";

interface IProps {
  cart: ProductCart[];
}

const Cart: FC<IProps> = ({ cart }) => {
  const [isActive, setIsActive] = useState(false);
  const isMobile = useIsMobile();

  const noOfItemText = useMemo(() => {
    return (
      <CartTextWrapper isActive={isActive}>{`${
        isMobile ? "" : "My Cart "
      } ( ${cart.reduce((acc, curr) => {
        return acc + curr.quantity;
      }, 0)} )`}</CartTextWrapper>
    );
  }, [cart, isActive, isMobile]);

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
          {!cart.length ? (
            <Text>Cart Empty</Text>
          ) : (
            cart.map((item) => <CartItem cartItem={item} key={item.size.id} />)
          )}
        </MenuBox>
      )}
    </>
  );
};

export default Cart;
