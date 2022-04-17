import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Sound} from "../sound/Sound";
import {FullScreenButton} from "../fullScreenButton/FullScreenButton";
import {PlayButton} from "../playButton/PlayButton";
import {Time} from "../time/Time";
import {StopButton} from "../stopButton/StopButton";
import {ControlWrapper, GroupWrapper} from "./controlStyle";
import {fullScreenAction, playAction} from "../../redux/actionCreator";
import {
    ARROW_LEFT,
    ARROW_RIGHT,
    FULL_SCREEN_CHANGE,
    KEY_BOARD_ACTION, MOZ_FULL_SCREEN_CHANGE,
    REWIND_TIME,
    SPACE, WEB_KIT_FULL_SCREEN_CHANGE
} from "../../constant/constant";

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
        const onKeyDown = ({key}) => {
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

        const exitHandler = () => {
            if (!document.webkitIsFullScreen
                && !document.mozFullScreen &&
                !document.msFullscreenElement) {
                dispatch(fullScreenAction(false));
                videoRef.current.muted = false;
            }
        }

        document.addEventListener(KEY_BOARD_ACTION, onKeyDown);
        document.addEventListener(FULL_SCREEN_CHANGE, exitHandler, false);
        document.addEventListener(MOZ_FULL_SCREEN_CHANGE, exitHandler, false);
        document.addEventListener(WEB_KIT_FULL_SCREEN_CHANGE, exitHandler, false);

        return () => {
            document.removeEventListener(KEY_BOARD_ACTION, onKeyDown);
            document.removeEventListener(FULL_SCREEN_CHANGE, exitHandler);
            document.removeEventListener(MOZ_FULL_SCREEN_CHANGE, exitHandler);
            document.removeEventListener(WEB_KIT_FULL_SCREEN_CHANGE, exitHandler);
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