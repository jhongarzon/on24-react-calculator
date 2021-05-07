import { SyntheticEvent } from "react";
export type CalcContainerProps = {};

export enum ButtonType {
  default = "",
  number = "number",
  operation = "operation",
}

export type CalcButtonProps = {
  value: string;
  label?: string;
  type?: ButtonType;
  customClass?: string;
  onClick: (e: SyntheticEvent) => void;
};
