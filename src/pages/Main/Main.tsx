import { FC, useState, useEffect, useMemo, useCallback } from "react";

import { useIsMobile } from "src/hooks";

import { Header } from "src/containers";
import { Button } from "src/components";
import { colors } from "src/res";
import { Product, Size, ProductCart } from "src/types";
import { mapCartItem } from "src/utils";

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
  ButtonWrapper,
  sizeButtonStyle,
  addButtonStyle,
  SelectedSizeSpan,
  ErrorText,
} from "./styles";

const Main: FC = () => {
  const [product, setProduct] = useState<Product>();
  const [selectedSize, setSelectSize] = useState<Size>();
  const [cartItems, setCartItems] = useState<ProductCart[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const isMobile = useIsMobile();

  useEffect(() => {
    fetch(
      "https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((data: Product) => {
        setError("");
        setIsLoading(false);
        setProduct(data);
      })
      .catch(() => {
        setIsLoading(false);
        setError("Can not load product");
      });
  }, []);

  const productPrice = useMemo(() => {
    return product?.price ? parseFloat(`${product?.price}`).toFixed(2) : "0";
  }, [product?.price]);

  const onAddProductCart = useCallback(() => {
    if (selectedSize && product) {
      setError("");
      setCartItems(mapCartItem(selectedSize, product, cartItems));
    } else {
      setError("Please select size");
    }
  }, [cartItems, product, selectedSize]);

  return (
    <Wrapper>
      {!isLoading ? (
        <>
          <Header cart={cartItems} />
          <ContentWrapper isMobile={isMobile}>
            <ProductImage isMobile={isMobile} src={product?.imageURL} />
            <ProductContent>
              <ProductName>{product?.title}</ProductName>
              {!isMobile && <Divider />}
              <ProductPrice>${productPrice}</ProductPrice>
              {!isMobile && <Divider />}
              <ProductDescription>{product?.description}</ProductDescription>
              <ProductSize>
                SIZE<Asterisk>* </Asterisk>
                <SelectedSizeSpan>{selectedSize?.label || ""}</SelectedSizeSpan>
              </ProductSize>
              <ButtonWrapper>
                {product?.sizeOptions?.map((item) => (
                  <Button
                    key={item.id}
                    text={item.label}
                    buttonContainerStyle={sizeButtonStyle}
                    color={colors.fontNormal}
                    borderColor={colors.borderLightGrey}
                    onClick={() => setSelectSize(item)}
                    isActive={item.id === selectedSize?.id}
                  />
                ))}
              </ButtonWrapper>
              <Button
                text="ADD TO CART"
                color={colors.fontBold}
                borderColor={colors.borderDarkGrey}
                buttonContainerStyle={addButtonStyle}
                withHover={true}
                onClick={onAddProductCart}
              />
              <ErrorText>{error}</ErrorText>
            </ProductContent>
          </ContentWrapper>
        </>
      ) : (
        <>...Loading</>
      )}
    </Wrapper>
  );
};

export default Main;
