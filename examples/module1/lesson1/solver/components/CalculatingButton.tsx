interface Props {
  children: string;
  handleClick: () => void;
}

export const CalculatingButton = ({ children, handleClick }: Props) => {
  return (
    <button
      className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
