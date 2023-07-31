import React, { FC, useState } from "react";

import { Header } from "src/containers";

import { Wrapper } from "./styles";

const Main: FC = () => {
  const [noOfItems, setNoOfItems] = useState<number>(0);

  return (
    <Wrapper>
      <Header noOfItems={noOfItems} />
    </Wrapper>
  );
};

export default Main;
