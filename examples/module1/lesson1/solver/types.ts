export type OperationType = 'add' | 'subtract' | 'multiply' | 'divide';
export type OperationSign = '+' | '-' | '*' | '/';

export interface Operation {
  type: OperationType;
  calculate: (a: number, b: number) => number;
}