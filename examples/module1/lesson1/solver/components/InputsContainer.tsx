interface Props {
  children: JSX.Element[];
}

export const InputsContainer = ({ children }: Props) => {
  return <div className="grid grid-cols-2 gap-x-4">{children}</div>;
};
