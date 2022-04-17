import moment from "moment";
import {SECONDS_IN_HOUR} from "../constant/constant";

export const formatTime = (seconds) => {
    return SECONDS_IN_HOUR > seconds
        ? moment(seconds * 1000).format('mm:ss')
        : moment(seconds * 1000).format('hh:mm:ss');
}

export const getProgressWidth = (currentTime, duration) => {
    return (currentTime / duration) * 100;
}

export const enableFullScreen = (element) => {
    const {userAgent} = navigator;

    if (userAgent.match(/chrome|chromium|crios/i)
        || userAgent.match(/firefox|fxios/i)
        || userAgent.match(/opr\//i)
        || userAgent.match(/edg/i)
    ) {
        element.requestFullscreen()
    } else {
        element.webkitRequestFullscreen()
    }
}

export const getProcent = (full, part) => {
    return part/ full;
}
