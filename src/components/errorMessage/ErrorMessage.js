import img from '../../img/error.gif';
import {ErrorImg} from "./errorMessageStyle";

export const ErrorMessage = () => {
    return (
        <ErrorImg alt='error message' src={img}/>
    )
}