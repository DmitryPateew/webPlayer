import {enableFullScreen} from "../../services/services";
import {FullScreen} from "./fullScreenButtonStyle";
import {useDispatch} from "react-redux";
import {fullScreenAction} from "../../redux/actionCreator";

export const FullScreenButton = ({videoRef: {current}}) => {
    const dispatch = useDispatch();

    return (
        <FullScreen onClick={() => {
            enableFullScreen(current)
            dispatch(fullScreenAction(true))
        }}/>
    )
}