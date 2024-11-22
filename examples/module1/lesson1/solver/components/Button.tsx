interface IButton {
    children: string;
    callback: () => void;
}

const Button = ({children, callback}: IButton) => {
    return (
        <button
          className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
          onClick={() => callback()}
        >{children}</button>
    )
}

export default Button;