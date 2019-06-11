import { ON_TIME_UPDATE } from "./constant";


export const playerReducer = (state = {}, action) => {

    switch(action.type) {
        case ON_TIME_UPDATE:
            return {...state, time:action.payload};
        default: 
            return {...state};
    }
}