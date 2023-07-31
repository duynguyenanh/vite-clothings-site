import React, { FC } from "react";

import { ProductCart } from "src/types";

import {
  Wrapper,
  ImageWrapper,
  ContentWrapper,
  NormalText,
  BoldText,
} from "./styles";

interface IProps {
  cartItem: ProductCart;
}

const CartItem: FC<IProps> = ({ cartItem }) => {
  return (
    <Wrapper>
      <ImageWrapper src="https://mrdevelopertestassets.s3.ap-southeast-2.amazonaws.com/classic-tee.jpg" />
      <ContentWrapper>
        <NormalText>{cartItem.title}</NormalText>
        <NormalText>
          {cartItem.quantity} x{" "}
          <BoldText>${parseFloat(`${cartItem.unitPrice}`).toFixed(2)}</BoldText>
        </NormalText>
        <NormalText>Size:{cartItem.size.label}</NormalText>
      </ContentWrapper>
    </Wrapper>
  );
};

export default CartItem;
