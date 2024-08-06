
import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {text: string}


export function Button({text, ...rest}: ButtonProps) {
    return <button{...rest}>{text}</button>
}