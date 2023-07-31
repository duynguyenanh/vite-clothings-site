import React, { FC } from "react";

import { Wrapper } from "./styles";

interface IProps {
  text: string;
  buttonContainerStyle?: React.CSSProperties;
  color: string;
  borderColor: string;
  withHover?: boolean;
  isActive?: boolean;
  onClick: () => void;
}

const Button: FC<IProps> = ({
  text,
  buttonContainerStyle = {},
  color,
  borderColor,
  withHover = false,
  isActive = false,
  onClick,
}) => {
  return (
    <Wrapper
      color={color}
      style={buttonContainerStyle}
      borderColor={borderColor}
      withHover={withHover}
      isActive={isActive}
      onClick={onClick}
    >
      {text}
    </Wrapper>
  );
};

export default Button;
