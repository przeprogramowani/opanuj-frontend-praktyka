export const Button = ({children, onClick, id}) => {
  return (
    <button
      key={id}
      className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
      onClick={onClick}
    >
      {children}
    </button>
  )
}