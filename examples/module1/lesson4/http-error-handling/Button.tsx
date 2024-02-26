const Button = ({ label, handler }: { label: string; handler: () => void }) => {
  return (
    <div className="flex flex-row items-center justify-between bg-white rounded-xl p-4">
      <p>{label}</p>
      <button
        className="bg-blue-200 text-blue-500 hover:bg-blue-500 hover:text-blue-200 rounded-lg p-4"
        onClick={handler}
      >
        Pobierz dane
      </button>
    </div>
  );
};

export default Button;
