import React, { FC } from "react";

import { Wrapper } from "./styles";

interface IProps {
  text: string;
  buttonContainerStyle?: React.CSSProperties;
  color: string;
  borderColor: string;
  withHover?: boolean;
  isActive?: boolean;
}

const Button: FC<IProps> = ({
  text,
  buttonContainerStyle = {},
  color,
  borderColor,
  withHover = false,
  isActive = false,
}) => {
  return (
    <Wrapper
      color={color}
      style={buttonContainerStyle}
      borderColor={borderColor}
      withHover={withHover}
      isActive={isActive}
    >
      {text}
    </Wrapper>
  );
};

export default Button;
