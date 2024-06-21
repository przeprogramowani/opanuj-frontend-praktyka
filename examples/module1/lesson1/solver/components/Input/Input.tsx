function Input({
  value,
  onChange,
  type,
}: Pick<JSX.IntrinsicElements['input'], 'value' | 'onChange' | 'type'>) {
  return (
    <input
      type={type}
      className="rounded-md shadow-md p-4"
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
