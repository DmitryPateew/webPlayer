import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Sound} from "../sound/Sound";
import {FullScreenButton} from "../fullScreenButton/FullScreenButton";
import {PlayButton} from "../playButton/PlayButton";
import {Time} from "../time/Time";
import {StopButton} from "../stopButton/StopButton";
import {ControlWrapper, GroupWrapper} from "./controlStyle";
import {playAction} from "../../redux/actionCreator";
import {ARROW_LEFT, ARROW_RIGHT, KEY_BOARD_ACTION, REWIND_TIME, SPACE} from "../../constant/constant";

export const Control = ({videoRef}) => {
    const {
        play,
        soundValue,
        stop,
        currentTime,
        rewind,
        duration
    } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        if (play && videoRef.current) {
            videoRef.current.play();
        } else if (videoRef.current) {
            videoRef.current.pause();
        }
    }, [play, videoRef])

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = soundValue;
        }
    }, [soundValue, videoRef])

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
        }
    }, [stop, videoRef])

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.currentTime = currentTime;
        }
    }, [rewind, videoRef])

    useEffect(() => {
        const onkeydown = ({key}) => {
            if (key === ARROW_LEFT) {
                videoRef.current.currentTime = currentTime - REWIND_TIME;
            }
            if (key === ARROW_RIGHT) {
                videoRef.current.currentTime = currentTime + REWIND_TIME;
            }
            if (key === SPACE) {
                dispatch(playAction())
            }
        }

        document.addEventListener(KEY_BOARD_ACTION, onkeydown);

        return () => {
            document.removeEventListener(KEY_BOARD_ACTION, onkeydown);
        };
    }, [currentTime]);

    useEffect(() => {
        if (currentTime === duration && duration !== 0) {
            dispatch(playAction())
        }
    }, [currentTime])

    return (
        <ControlWrapper>
            <GroupWrapper>
                <PlayButton/>
                <StopButton/>
                <Time/>
            </GroupWrapper>
            <GroupWrapper>
                <Sound/>
                <FullScreenButton videoRef={videoRef}/>
            </GroupWrapper>
        </ControlWrapper>
    )
}