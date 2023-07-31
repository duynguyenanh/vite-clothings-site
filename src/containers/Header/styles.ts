import styled from "styled-components";

import { colors } from "src/res";

export const Wrapper = styled.div<{ isMobile?: boolean }>`
  height: 30px;
  width: ${(props) => (props.isMobile ? "100vw" : "75vw")};
  background: ${colors.headerBackground};
`;
