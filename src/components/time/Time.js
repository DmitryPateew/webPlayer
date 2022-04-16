import {useSelector} from "react-redux";
import {formatTime} from "../../services/services";
import {TimeView} from "./timeStyle";

export const Time = () => {
    const {currentTime, duration} = useSelector(state => state);

    return (
        <div>
            <TimeView>{formatTime(currentTime)}</TimeView>
            <TimeView as='span'> / </TimeView>
            <TimeView>{formatTime(duration)}</TimeView>
        </div>
    )
}