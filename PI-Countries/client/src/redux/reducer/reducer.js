import { GET_ALL_COUNTRIES,
    NEXT_PAGE,
    PREV_PAGE,
    HANDLE_NUMBER,
    GET_COUNTRY_BY_ID,
    GET_COUNTRIES_BY_NAME,
    ADD_ACTIVITY,
    GET_ACTIVITIES,
    ORDER,
    FILTER
 } from "../actions/types";

 const initialState = {
        countries: [],
        country:[],
        countriesByName: [],
        activities:[],
        currentPage: 1,
        activity:{},
        order: [],
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
        case GET_COUNTRY_BY_ID:
            return {
                ...state,
                country: payload,
            }
        case GET_COUNTRIES_BY_NAME:
            return {
                ...state,
                countriesByName: payload,
            }
        case ADD_ACTIVITY:
            return {
                ...state,
                activity: payload,
            }
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: payload,
            }
        case ORDER:
            if (payload === "asc") {
                return {
                    ...state,
                    countries: state.countries.sort((a, b) => {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (b.name > a.name) {
                            return -1;
                        }
                        return 0;
                    })
                }
            }
            if (payload === "desc") {
                return {
                    ...state,
                    countries: state.countries.sort((a, b) => {
                        if (a.name > b.name) {
                            return -1;
                        }
                        if (b.name > a.name) {
                            return 1;
                        }
                        return 0;
                    })
                }
            }
            if (payload === "population_desc") {
                return {
                    ...state,
                    countries: state.countries.sort((a, b) => {
                        if (a.population > b.population) {
                            return 1;
                        }
                        if (b.population > a.population) {
                            return -1;
                        }
                        return 0;
                    })
                }
            }
            if (payload === "population_asc" ) {
                return {
                    ...state,
                    countries: state.countries.sort((a, b) => {
                        if (a.population > b.population) {
                            return -1;
                        }
                        if (b.population > a.population) {
                            return 1;
                        }
                        return 0;
                    })
                }
            }
        default:
            return state;
    }
};

export default rootReducer;