const OperationButton = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    className="px-2 py-4 text-lg bg-blue-200 rounded-md hover:bg-blue-500 hover:text-white"
    onClick={onClick}
  >
    {children}
  </button>
);

export default OperationButton;
