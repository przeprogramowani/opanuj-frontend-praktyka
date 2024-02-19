interface ValidationMessageProps {
  isValid: boolean;
  isEmpty: boolean;
}

export function ValidationMessage({
  isValid,
  isEmpty,
}: ValidationMessageProps) {
  return (
    <div className="text-lg mt-4" id="result">
      {isEmpty ? '' : isValid ? 'Valid' : 'Invalid'}
    </div>
  );
}

export default ValidationMessage;
