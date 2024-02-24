const PrimaryButton = ({ children, onClick }: {
  children: React.ReactNode,
  onClick: () => void,
}) => (
  <button
    className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
    onClick={onClick}
  >
    {children}
  </button>
);

export default PrimaryButton;