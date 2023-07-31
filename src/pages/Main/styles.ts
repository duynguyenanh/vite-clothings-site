import styled from "styled-components";

import { colors } from "src/res";

export const Wrapper = styled.div({
  background: colors.white,
  display: "flex",
  width: "100vw",
  height: "100vh",
  padding: "14px 0",
  boxSizing: "border-box",
  alignItems: "center",
  flexDirection: "column",
  overflow: "hidden",
  overflowY: "scroll",
});

export const ContentWrapper = styled.div<{ isMobile: boolean }>((props) => ({
  display: "flex",
  padding: props.isMobile ? "40px 20px" : "40px 10vw",
  flexDirection: props.isMobile ? "column" : "row",
  width: props.isMobile ? "100vw" : "75vw",
  alignItems: "center",
  justifyContent: "center",
  gap: "1vw",
  boxSizing: "border-box",
  marginTop: "20px",
}));

export const ProductImage = styled.img<{ isMobile: boolean }>((props) => ({
  maxWidth: props.isMobile ? "calc( 100vw - 40px )" : "400px",
  marginBottom: "20px",
  marginRight: props.isMobile ? "0px" : "80px",
  flex: 1,
}));

export const ProductContent = styled.div({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  flex: 1,
});

export const ProductName = styled.div({
  color: colors.fontBold,
  fontSize: "20px",
  marginBottom: "20px",
});

export const Divider = styled.div({
  height: "0.5px",
  width: "100%",
  background: colors.headerBackground,
  margin: "10px 0px",
});

export const ProductPrice = styled.div({
  fontSize: "14px",
  fontWeight: "bold",
  color: colors.fontBold,
});

export const ProductDescription = styled.div({
  fontSize: "12px",
  color: colors.fontNormal,
  margin: "20px 0px",
});

export const ProductSize = styled.div({
  fontSize: "12px",
  color: colors.fontNormal,
  fontWeight: "bold",
  marginBottom: "10px",
});

export const Asterisk = styled.span({
  color: colors.requiredStar,
});

export const ButtonWrapper = styled.div({
  display: "flex",
  gap: "4px",
  marginBottom: "20px",
});

export const sizeButtonStyle = {
  width: "40px",
  height: "40px",
};

export const addButtonStyle = {
  width: "140px",
  fontWeight: "bold",
  borderWidth: "2px",
  "&:hover": {
    color: "white",
  },
};

export const SelectedSizeSpan = styled.span({
  fontSize: "12px",
  color: colors.fontBold,
  fontWeight: "bold",
});
