import { CalculatorState, initialCalculatorState } from "./types";

import {
  Action,
  ActionType,
  SetAdd,
  SetClear,
  SetDivide,
  SetEqual,
  SetInput,
  SetMultiply,
  SetSubtract,
} from "./actions";
import {
  Addition,
  Subtract,
  Multiply,
  Divide,
} from "../../services/calculator/operations";

export const calculatorReducer = (
  state: CalculatorState,
  action: Action
): CalculatorState => {
  console.log(`Action Type: ${action.type}`);
  console.log(
    `Input: ${state.input} Total: ${state.total} Operator: ${state.currentOperator} `
  );
  switch (action.type) {
    case ActionType.Addition:
    case ActionType.Subtract:
    case ActionType.Multiply:
    case ActionType.Divide:
      if (
        state.input &&
        state.currentOperator == action.payload.currentOperator
      ) {
        const total = action.payload.currentOperation(state.total, state.input);

        return {
          ...state,
          currentOperation: undefined,
          currentOperator: "",
          input: 0,
          display: total.toString(),
          total: total,
        };
      }
      return {
        ...state,
        currentOperation: action.payload.currentOperation,
        currentOperator: action.payload.currentOperator,
      };
    case ActionType.Input:
      if (state.currentOperation) {
        if (state.input == 0)
          return {
            ...state,
            input: action.payload,
            display: action.payload.toString(),
          };
        const display = `${state.input}${action.payload}`;
        const newInput = parseFloat(display);
        return { ...state, input: newInput, display: display };
      }
      if (state.total == 0)
        return {
          ...state,
          total: action.payload,
          display: action.payload.toString(),
        };
      const display = `${state.total}${action.payload}`;
      const newTotal = parseFloat(display);
      return { ...state, total: newTotal, display: display };
    case ActionType.Equal:
      if (!(state.input > 0) || !state.currentOperation) {
        return state;
      }
      const total = state.currentOperation(state.total, state.input);
      //TODO validate history

      return {
        ...state,
        currentOperator: "",
        currentOperation: undefined,
        input: 0,
        total: total,
        display: total.toString(),
        history: [
          ...state.history,
          {
            left: state.total,
            right: state.input,
            operator: state.currentOperator,
            subTotal: total,
          },
        ],
      };
    case ActionType.Clear:
      return initialCalculatorState;
    default:
      return state;
  }
};
export const add = (): SetAdd => ({
  type: ActionType.Addition,
  payload: { currentOperation: Addition, currentOperator: "+" },
});

export const subtract = (): SetSubtract => ({
  type: ActionType.Subtract,
  payload: { currentOperation: Subtract, currentOperator: "-" },
});
export const multiply = (): SetMultiply => ({
  type: ActionType.Multiply,
  payload: { currentOperation: Multiply, currentOperator: "*" },
});
export const divide = (): SetDivide => ({
  type: ActionType.Divide,
  payload: { currentOperation: Divide, currentOperator: "/" },
});
export const input = (input: number): SetInput => ({
  type: ActionType.Input,
  payload: input,
});
export const equal = (): SetEqual => ({
  type: ActionType.Equal,
});
export const clear = (): SetClear => ({
  type: ActionType.Clear,
});
export default calculatorReducer;
