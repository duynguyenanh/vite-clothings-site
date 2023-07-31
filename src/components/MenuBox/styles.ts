import styled from "styled-components";

import { colors } from "src/res";

export const Wrapper = styled.div({
  position: "absolute",
  display: "flex",
  border: `1px solid ${colors.borderLightGrey}`,
  width: "150px",
  height: "150px",
  top: "44px",
  boxSizing: "border-box",
});
