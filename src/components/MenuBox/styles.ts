import styled from "styled-components";

import { colors } from "src/res";

export const Wrapper = styled.div<{ isMobile: boolean }>((props) => ({
  position: "absolute",
  display: "flex",
  border: `1px solid ${colors.borderLightGrey}`,
  width: props.isMobile ? "calc( 100% - 80px )" : "300px",
  top: "30px",
  boxSizing: "border-box",
  flexDirection: "column",
  gap: "30px",
  padding: "20px",
  background: colors.white,
  userSelect: "none",
}));
