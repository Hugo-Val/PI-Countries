import { GET_ALL_COUNTRIES,
    NEXT_PAGE,
    PREV_PAGE,
    HANDLE_NUMBER,
 } from "../actions/types";

 const initialState = {
        countries: [],
        currentPage: 1,
 }



const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: payload,
            }
        case HANDLE_NUMBER:
            return {
                ...state,
                currentPage: payload,
            }
        case NEXT_PAGE:
            return {
                ...state,
                currentPage: state.currentPage + 1,
            }
        case PREV_PAGE:
            return {
                ...state,
                currentPage: state.currentPage - 1,
            }
        default:
            return state;
    }
};

export default rootReducer;