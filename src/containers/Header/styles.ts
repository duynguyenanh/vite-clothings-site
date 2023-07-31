import styled from "styled-components";

import { colors } from "src/res";

export const Wrapper = styled.div<{ isMobile?: boolean }>`
  height: 30px;
  width: ${(props) => (props.isMobile ? "100vw" : "75vw")};
  background: ${colors.headerBackground};
  display: flex;
  justify-content: flex-end;
  padding: ${(props) => (props.isMobile ? "0 40px" : "0 8vw")};
  box-sizing: border-box;
`;
