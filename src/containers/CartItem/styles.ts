import styled from "styled-components";

import { colors } from "src/res";

export const Wrapper = styled.div({
  display: "flex",
  gap: "10px",
});

export const ImageWrapper = styled.img({
  width: "70px",
  height: "100px",
});

export const ContentWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

export const NormalText = styled.div({
  color: colors.black,
  fontSize: "12px",
});

export const BoldText = styled.span({
  fontWeight: "bold",
});
