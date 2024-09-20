const Error = ({ error }: { error: string[] }) => {
  return (
    <>
      {error.length > 0 && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          {error.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}
    </>
  );
};

export default Error;
