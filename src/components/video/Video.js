import {forwardRef, useEffect, useState} from "react";
import {getVideo} from "../../httpService/httpService";
import {currentTimeAction, durationAction, loadingAction, playAction, setSoundValue} from "../../redux/actionCreator";
import {useDispatch, useSelector} from "react-redux";
import {Spinner} from "../spinner/Spinner";
import {ErrorMessage} from "../errorMessage/ErrorMessage";
import {Overlay, VideoLayer, VideoWrapper} from "./videoStyle";

export const Video = forwardRef((prop, videoRef) => {
    const [videoInfo, setVideoInfo] = useState({});
    const [error, setError] = useState(false);
    const {loading, play, fullScreen} = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        getVideo()
            .then(onVideoLoaded)
            .then(() => {
                dispatch(loadingAction(true))
            })
            .catch(onError)

    }, [])

    const onVideoLoaded = ({url, format}) => {
        setVideoInfo({url, format});
    }

    const onError = () => {
        dispatch(loadingAction(false));
        setError(true);
    }

    const updateCurrentTimeVolume = ({target: {currentTime}}) => {
        dispatch(currentTimeAction(currentTime));
    }

    const updateDuration = ({target: {duration}}) => {
        dispatch(durationAction(duration));
    }

    const updateVolume = ({target: {volume, muted}}) => {
        if (fullScreen) {
            dispatch(setSoundValue(volume));
            if (muted) {
                dispatch(setSoundValue(0));
            }
        }
    }

    return (
        <VideoWrapper>
            {loading && <Spinner/>}
            {error && <ErrorMessage/>}
            {!loading && !error &&
                <>
                    {!play &&
                        <Overlay
                            onClick={() => {
                                dispatch(playAction())
                            }}/>
                    }
                    <VideoLayer
                        onClick={() => {
                            dispatch(playAction())
                        }}
                        ref={videoRef}
                        onTimeUpdate={updateCurrentTimeVolume}
                        onLoadedMetadata={updateDuration}
                        onVolumeChange={updateVolume}
                        controls={fullScreen}
                        playsinline
                    >
                        <source src={videoInfo.url} type={`video/${videoInfo.format}`}/>
                    </VideoLayer>
                </>
            }
        </VideoWrapper>
    )
})