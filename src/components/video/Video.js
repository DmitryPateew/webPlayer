import {forwardRef, useEffect, useState} from "react";
import {getVideo} from "../../httpService/httpService";
import {currentTimeAction, durationAction, loadingAction, playAction} from "../../redux/actionCreator";
import {useDispatch, useSelector} from "react-redux";
import {Spinner} from "../spinner/Spinner";
import {ErrorMessage} from "../errorMessage/ErrorMessage";
import {Overlay, VideoLayer, VideoWrapper} from "./videoStyle";

export const Video = forwardRef((prop, videoRef) => {
    const [videoInfo, setVideoInfo] = useState({});
    const [error, setError] = useState(false);
    const {loading, play} = useSelector(state => state);
    const dispatch = useDispatch();
    const [control, setControl]=useState(false);

    useEffect(()=>{
        setControl(false);
    },[])

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

    const updateCurrentTime = ({target: {currentTime}}) => {
        dispatch(currentTimeAction(currentTime));
    }

    const updateDuration = ({target: {duration}}) => {
        dispatch(durationAction(duration))
    }

    return (
        <VideoWrapper>
            {loading && <Spinner/>}
            {error && <ErrorMessage/>}
            {!loading && !error &&
                <>
                    {!play && <Overlay/>}
                    <VideoLayer
                        onClick={() => dispatch(playAction())}
                        ref={videoRef}
                        onTimeUpdate={updateCurrentTime}
                        onLoadedMetadata={updateDuration}
                        playsinline
                        controls={control}
                    >
                        <source src={videoInfo.url} type={`video/${videoInfo.format}`}/>
                    </VideoLayer>
                </>
            }
        </VideoWrapper>
    )
})