import {playAction} from "../../redux/actionCreator";
import {useDispatch, useSelector} from "react-redux";
import {Play} from "./playButtonStyle";

export const PlayButton = () => {
    const {play} = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <Play play={play} onClick={() => dispatch(playAction())}/>
    )
}