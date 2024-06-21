import { methods } from "./methods.js";

export function validate(number){
    return methods.every(method => method(number))
}