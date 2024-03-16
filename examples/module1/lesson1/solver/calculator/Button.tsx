type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
