import React from "react";

type TitleProps = {
  text: string;
};

function Title({ text }: TitleProps) {
  return <h1>{text}</h1>;
}

export default Title;
