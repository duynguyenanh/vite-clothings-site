import styled from "styled-components";

import { colors } from "src/res";

export const Wrapper = styled.div<{ isActive: boolean }>((props) => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    flexWrap: "nowrap",
    cursor: "pointer",
    border: props.isActive ? `1px solid ${colors.borderLightGrey}` : "none",
    borderBottom: "none",
    marginBottom: "-4px",
    backgroundColor: props.isActive ? colors.white : colors.headerBackground,
    flexDirection: "column",
  };
});

export const CartTextWrapper = styled.div<{ isActive?: boolean }>`
  color: ${(props) => (props.isActive ? colors.fontBold : colors.fontNormal)};
  font-size: 10px;
  user-select: none;
`;

export const BottomCartCover = styled.div({
  background: colors.white,
  width: "100%",
  position: "relative",
  top: "-2px",
  zIndex: 9999,
  padding: "2px",
  boxSizing: "border-box",
});

export const MenuWrapper = styled.div<{ isActive: boolean }>((props) => ({
  padding: "10px",
  marginBottom: props.isActive ? "-2px" : "0px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const Text = styled.div({
  color: colors.fontNormal,
  fontSize: "10px",
});
