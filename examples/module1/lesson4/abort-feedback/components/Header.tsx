export const Header = ({
  loading,
  timeoutMessage,
  onRetry,
}: {
  loading: boolean;
  timeoutMessage: string;
  onRetry: () => void;
}) => (
  <div className="flex flex-row items-center justify-between py-4 h-24">
    <h1 className="text-2xl font-bold"> Users </h1>
    <div className="flex flex-row items-center">
      {loading && <p className="mr-2"> Loading...</p>}
      {timeoutMessage && <p className="mr-2"> {timeoutMessage} </p>}
      {timeoutMessage && (
        <button
          className="text-blue-400 bg-blue-200 hover:text-blue-200 hover:bg-blue-400 rounded-md p-4"
          onClick={onRetry}
        >
          Try again
        </button>
      )}
    </div>
  </div>
);
