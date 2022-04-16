import {stopAction} from "../../redux/actionCreator";
import {useDispatch} from "react-redux";
import {StopButtonStyled} from "./stopButtonStyle";

export const StopButton = () => {
    const dispatch = useDispatch();

    return (
        <StopButtonStyled onClick={() => dispatch(stopAction())}/>
    )
}