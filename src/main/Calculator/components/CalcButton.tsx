import React, { FC } from "react";
import { ButtonType, CalcButtonProps } from "../types";

const CalcButton: FC<CalcButtonProps> = ({
  label,
  value,
  type = ButtonType.default,
}: CalcButtonProps) => {
  return (
    <div className={`calc-button ${type}`} data-value={value}>
      {label ? label : value}
    </div>
  );
};

export default CalcButton;
