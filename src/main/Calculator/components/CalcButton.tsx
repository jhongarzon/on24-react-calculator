import React, { FC } from "react";
import { ButtonType, CalcButtonProps } from "../types";

const CalcButton: FC<CalcButtonProps> = ({
  label,
  value,
  type,
  onClick,
  customClass,
}: CalcButtonProps) => {
  let className = "calc-button";
  if (type) className += ` ${type}`;
  if (customClass) className += ` ${customClass}`;
  return (
    <button className={className} value={value} onClick={onClick}>
      {label ? label : value}
    </button>
  );
};

export default CalcButton;
