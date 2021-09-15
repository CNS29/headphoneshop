import * as types from "../constants/constants";

const initialState = false;

const message = (state = initialState, action) => {
    switch(action.type) {
        case types.MESSAGE: {
            return action.isCheck;
        }
        default: return state;
    }
}

export default message;
