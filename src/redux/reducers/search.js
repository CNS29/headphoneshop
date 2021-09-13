import * as types from "../constants/constants";

const initialState = "";

const search = (state = initialState, action) => {
    switch(action.type) {
        case types.SEARCH_PRODUCT: {
            return action.value;
        }
        default: return state;
    }
}

export default search;
