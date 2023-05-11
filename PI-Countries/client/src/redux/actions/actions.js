import { GET_ALL_COUNTRIES,
    NEXT_PAGE,
    PREV_PAGE,
    HANDLE_NUMBER,
    GET_COUNTRY_BY_ID,
    GET_COUNTRIES_BY_NAME,
    ADD_ACTIVITY,
    GET_ACTIVITIES,
    ORDER,
    FILTER,
    ADD_LOCATION
 } from "./types";
import axios from "axios";

export const addLocation = (path) => {
  return {
      type: ADD_LOCATION,
      payload: path,
  } 
}

export const getAllCountries = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3001/countries");
    dispatch({
      type: GET_ALL_COUNTRIES,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const nextPage = () => {
    return {
        type: NEXT_PAGE,
    }
}

export const prevPage = () => {
    return {
        type: PREV_PAGE,
    }
}

export const handleNumber = (number) => {
    return {
        type: HANDLE_NUMBER,
        payload: number,
    }
}

export const getCountryById = (id) => async (dispatch) => {
    try {
      const res = await axios.get(`http://localhost:3001/countries/${id}`);
      dispatch({
        type: GET_COUNTRY_BY_ID,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  export const getCountriesByName = (name) => async (dispatch) => {
    try {
      const res = await axios.get(`http://localhost:3001/countries/name?name=${name}`);
      dispatch({
        type: GET_COUNTRIES_BY_NAME,
        payload: res.data,
        
      });
    } catch (error) {
      console.log(error);
    }
  }

  export const addActivity = (activity) => async (dispatch) => {
    try {
      const res = await axios.post(`http://localhost:3001/activities`, activity);
      dispatch({
        type: ADD_ACTIVITY,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  export const getActivities = () => async (dispatch) => {
    try {
      const res = await axios.get(`http://localhost:3001/activities`);
      dispatch({
        type: GET_ACTIVITIES,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

export const order = (order) => {
  return {
      type: ORDER,
      payload: order,
  }
}


export const filter = (filter) => {
  return {
      type: FILTER,
      payload: filter,
  }
}


    