import { ON_TIME_UPDATE } from "./constant";

export const onTimeUpdate = (time) => ({
        type: ON_TIME_UPDATE,
        payload: time
    });