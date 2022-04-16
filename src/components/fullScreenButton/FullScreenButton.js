import {enableFullScreen} from "../../services/services";
import {FullScreen} from "./fullScreenButtonStyle";

export const FullScreenButton = ({videoRef: {current}}) => {
    return (
        <FullScreen onClick={() => enableFullScreen(current)}/>
    )
}