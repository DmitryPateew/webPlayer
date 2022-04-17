import {activateSound, setSoundValue} from "../../redux/actionCreator";
import {useDispatch, useSelector} from "react-redux";
import {Range, SoundButton, SoundWrapper} from "./soundStyle";

export const Sound = () => {
    const {activeSound, soundValue} = useSelector(state => state);
    const dispatch = useDispatch();

    const updateSound = ({target: {value}}) => {
        dispatch(setSoundValue(value))
    }

    return (
        <SoundWrapper onMouseEnter={() => dispatch(activateSound(true))}
                      onMouseLeave={() => dispatch(activateSound(false))}
        >
            {activeSound &&
                <Range onChange={updateSound}
                       value={soundValue}
                       type="range"
                       min="0"
                       max="1"
                       step="0.01"
                />}
            <SoundButton
                soundValue={soundValue}
                onClick={() => dispatch(setSoundValue(soundValue ? 0 : 1))}/>
        </SoundWrapper>
    )
}