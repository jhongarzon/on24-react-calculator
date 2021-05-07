export enum ActionType {
  Input,
  Addition,
  Subtract,
  Multiply,
  Divide,
  Equal,
  Clear,
}
export type SetInput = {
  type: ActionType.Input;
  payload: number;
};
export interface SetAdd {
  type: ActionType.Addition;
  payload: {
    currentOperator: string;
    currentOperation: (left: number, right: number) => number;
  };
}
export type SetSubtract = {
  type: ActionType.Subtract;
  payload: {
    currentOperator: string;
    currentOperation: (left: number, right: number) => number;
  };
};
export type SetMultiply = {
  type: ActionType.Multiply;
  payload: {
    currentOperator: string;
    currentOperation: (left: number, right: number) => number;
  };
};
export type SetDivide = {
  type: ActionType.Divide;
  payload: {
    currentOperator: string;
    currentOperation: (left: number, right: number) => number;
  };
};
export type SetEqual = {
  type: ActionType.Equal;
};

export type SetClear = {
  type: ActionType.Clear;
};

export type Action =
  | SetInput
  | SetAdd
  | SetSubtract
  | SetMultiply
  | SetDivide
  | SetEqual
  | SetClear;
