interface Props {
  children: JSX.Element[];
}

export const ButtonsContainer = ({ children }: Props) => {
  return <div className="grid grid-cols-4 gap-x-4 my-4">{children}</div>;
};
