import {ACTIVE_SOUND, CURRENT_TIME, DURATION, FULL_SCREEN, LOADING, PLAY, REWIND, SOUND_VALUE, STOP} from "./actions";

export const playAction = () => ({
    type: PLAY
})

export const stopAction = () => ({
    type: STOP
})

export const activateSound = (payload) => ({
    type: ACTIVE_SOUND,
    payload
})

export const setSoundValue = (payload) => ({
    type: SOUND_VALUE,
    payload
})

export const loadingAction = () => ({
    type: LOADING
})

export const currentTimeAction = (payload) => ({
    type: CURRENT_TIME,
    payload
})

export const durationAction = (payload) => ({
    type: DURATION,
    payload
})

export const rewindAction = () => ({
    type: REWIND
})

export const fullScreenAction = (payload) => ({
    type: FULL_SCREEN,
    payload
})