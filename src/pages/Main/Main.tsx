import React, { FC, useState } from "react";

import { useIsMobile } from "src/hooks";

import { Header } from "src/containers";

import {
  Wrapper,
  ContentWrapper,
  ProductImage,
  ProductContent,
  ProductName,
  Divider,
  ProductPrice,
  ProductDescription,
  ProductSize,
  Asterisk,
} from "./styles";

const Main: FC = () => {
  const [noOfItems] = useState<number>(0);
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      <Header noOfItems={noOfItems} />
      <ContentWrapper isMobile={isMobile}>
        <ProductImage
          isMobile={isMobile}
          src="https://mrdevelopertestassets.s3.ap-southeast-2.amazonaws.com/classic-tee.jpg"
        />
        <ProductContent>
          <ProductName>Classic Tee</ProductName>
          {!isMobile && <Divider />}
          <ProductPrice>$75.00</ProductPrice>
          {!isMobile && <Divider />}
          <ProductDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </ProductDescription>
          <ProductSize>
            SIZE<Asterisk>*</Asterisk>
          </ProductSize>
        </ProductContent>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Main;
