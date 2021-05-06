import React, { FC } from "react";
import { DisplayProps } from "../types";

const Display: FC<DisplayProps> = (props: DisplayProps) => {
  return <div className="display">{props.data}</div>;
};

export default Display;
