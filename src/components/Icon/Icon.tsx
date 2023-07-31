import React, { FC } from "react";

import { ICON_NAMES } from "src/types";

import CartActive from "src/assets/cart.svg";
import CartInactive from "src/assets/cart-grey.svg";

import { Wrapper } from "./styles";

interface IProps {
  name: ICON_NAMES;
}

const ICON_TO_FILE_MAP = {
  [ICON_NAMES.cart]: CartInactive,
  [ICON_NAMES.cartActive]: CartActive,
};

const Icon: FC<IProps> = ({ name }) => {
  const svgIcon = ICON_TO_FILE_MAP[name];
  return (
    <Wrapper>
      <img src={svgIcon} />
    </Wrapper>
  );
};

export default Icon;
