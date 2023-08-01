import styled from "styled-components";

import { colors } from "src/res";

export const Wrapper = styled.div<{
  color: string;
  borderColor: string;
  withHover: boolean;
  isActive: boolean;
}>((props) => ({
  padding: "10px",
  border: `${props.isActive ? "2px" : "1px"} solid ${
    props.isActive ? colors.borderDarkGrey : props.borderColor
  }`,
  fontSize: "12px",
  color: props.isActive ? colors.fontBold : props.color,
  cursor: "pointer",
  justifyContent: "center",
  alignItems: "center",
  boxSizing: "border-box",
  display: "flex",
  ...(props.withHover && {
    "&:hover": {
      color: "white",
      background: colors.borderDarkGrey,
      transition: `background-color 0.2s ease`,
    },
  }),
  userSelect: "none",
}));
