import { useState } from "react";
import { Root, Description, Title, Close } from "./Warning.style";
import { Props } from "./Warning.types";

const Warning = (props: Props) => {
  const { title, description } = props;
  const [displayed, setDisplayed] = useState(true);

  const close = () => {
    setDisplayed(false);
  }

  return displayed ? (
    <Root>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Close type="button" onClick={close}>&#10006;</Close>
    </Root>
  ) : <></>;
};

export default Warning;
