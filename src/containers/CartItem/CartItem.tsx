import React, { FC } from "react";

import {
  Wrapper,
  ImageWrapper,
  ContentWrapper,
  NormalText,
  BoldText,
} from "./styles";

const CartItem: FC = () => {
  return (
    <Wrapper>
      <ImageWrapper src="https://mrdevelopertestassets.s3.ap-southeast-2.amazonaws.com/classic-tee.jpg" />
      <ContentWrapper>
        <NormalText>Classic Tee</NormalText>
        <NormalText>
          1 x <BoldText>$75.00</BoldText>
        </NormalText>
        <NormalText>Size:L</NormalText>
      </ContentWrapper>
    </Wrapper>
  );
};

export default CartItem;
