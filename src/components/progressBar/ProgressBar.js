import {useDispatch, useSelector} from "react-redux";
import {Progress, ProgressLine} from "./progressBarStyle";
import {getProcent} from "../../services/services";
import {currentTimeAction, rewindAction} from "../../redux/actionCreator";

export const ProgressBar = () => {
    const {currentTime, duration} = useSelector(state => state);
    const dispatch = useDispatch();

    const setCurrentTime = evt => {
        const elementWidth = evt.currentTarget.offsetWidth;
        const clickedWidth = evt.clientX - evt.target.getBoundingClientRect().left;
        const procent = getProcent(elementWidth, clickedWidth);
        dispatch(rewindAction());
        dispatch(currentTimeAction(duration * procent));
    }

    return (
        <Progress onClick={setCurrentTime}>
            <ProgressLine
                currentTime={currentTime}
                duration={duration}
            />
        </Progress>
    )
}