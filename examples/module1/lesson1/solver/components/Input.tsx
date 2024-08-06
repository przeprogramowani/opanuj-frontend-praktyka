import  {HTMLProps} from "react";

type InputProps = Omit<HTMLProps<HTMLInputElement>, "onChange"> & {onChange: (event: React.ChangeEvent<HTMLInputElement>) => void}

export function Input({ onChange,value, ...props}: InputProps) {
    return <input{...props} onChange={onChange} type="number"/>
}