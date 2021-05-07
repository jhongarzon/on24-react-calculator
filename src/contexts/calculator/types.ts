export type CalculatorState = {
  display: string;
  input: number;
  currentOperator: string;
  currentOperation?: (left: number, right: number) => number;
  total: number;
  history: History[];
};

export type History = {
  left: number;
  operator: string;
  right: number;
  subTotal: number;
};

export const initialCalculatorState: CalculatorState = {
  display: "",
  input: 0,
  currentOperator: "",
  currentOperation: undefined,
  total: 0,
  history: [],
};
