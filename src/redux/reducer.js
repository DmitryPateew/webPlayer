import {ACTIVE_SOUND, CURRENT_TIME, DURATION, FULL_SCREEN, LOADING, PLAY, REWIND, SOUND_VALUE, STOP} from "./actions";
import {initialState} from "./initialState";

export const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case PLAY:
            return {...state, play: !state.play};
        case SOUND_VALUE:
            return {...state, soundValue: payload};
        case LOADING:
            return {...state, loading: payload}
        case ACTIVE_SOUND:
            return {...state, activeSound: payload}
        case STOP:
            return {...state, stop: !state.stop, play: false}
        case CURRENT_TIME:
            return {...state, currentTime: payload}
        case DURATION:
            return {...state, duration: payload}
        case REWIND:
            return {...state, rewind: !state.rewind}
        case FULL_SCREEN:
            return {...state, fullScreen: payload}
        default:
            return state;
    }
}