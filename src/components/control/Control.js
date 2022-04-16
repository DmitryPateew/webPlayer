import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Sound} from "../sound/Sound";
import {FullScreenButton} from "../fullScreenButton/FullScreenButton";
import {PlayButton} from "../playButton/PlayButton";
import {Time} from "../time/Time";
import {StopButton} from "../stopButton/StopButton";
import {ControlWrapper, GroupWrapper} from "./controlStyle";
import {playAction} from "../../redux/actionCreator";

export const Control = ({videoRef}) => {
    const {play, soundValue, stop, currentTime, rewind} = useSelector(state => state);
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
            if (key === 'ArrowLeft') {
                videoRef.current.currentTime = currentTime - 5;
            }
            if (key === 'ArrowRight') {
                videoRef.current.currentTime = currentTime + 5;
            }
            if (key === ' ') {
                dispatch(playAction())
            }
        }

        document.addEventListener('keydown', onkeydown);

        return () => {
            document.removeEventListener('keydown', onkeydown);
        };
    }, [currentTime]);

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