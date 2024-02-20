type CustomButtonProps = {
  text: string;
  handleClick: () => void;
};

export const CustomButton = ({ text, handleClick }: CustomButtonProps) => {
  return (
    <button
      className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
