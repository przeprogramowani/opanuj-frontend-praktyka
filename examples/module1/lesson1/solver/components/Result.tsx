interface ResultProps {
  result: number | string;
  error: string;
}

export function Result({ result, error }: ResultProps) {
  return <div>{error || `Result: ${result}`}</div>;
}
