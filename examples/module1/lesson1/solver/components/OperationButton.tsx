import { MAP_OPERATION_SIGN } from "../functions";
import type { OperationType } from "../types";

interface OperationButtonProps {
  onClickFn: () => void;
  type: OperationType
}

export default function OperationButton({onClickFn, type}: OperationButtonProps) {
  return (
    <button className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md" onClick={onClickFn}>{MAP_OPERATION_SIGN[type]}</button>
  )
}