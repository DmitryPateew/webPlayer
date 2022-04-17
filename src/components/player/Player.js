import {Control} from "../control/Control";
import {useRef} from "react";
import {Video} from "../video/Video";
import {ProgressBar} from "../progressBar/ProgressBar";
import {Wrapper} from "./playerStyle";

export const Player = () => {
    const videoRef = useRef(null);

    return (
        <Wrapper>
            <Video ref={videoRef}/>
            <ProgressBar/>
            <Control videoRef={videoRef}/>
        </Wrapper>
    )
}