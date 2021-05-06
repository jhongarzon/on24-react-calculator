export type CalcContainerProps = {};

export enum ButtonType {
  default = "",
  number = "number",
  operation = "operation",
}

export type CalcButtonProps = {
  label?: string;
  value: string;
  type?: ButtonType;
};

export type CalculatorProps = {
  data?: string;
};

export type DisplayProps = {
  data?: string;
};
