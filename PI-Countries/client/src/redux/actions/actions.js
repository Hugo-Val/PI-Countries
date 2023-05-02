import { GET_ALL_COUNTRIES,
    NEXT_PAGE,
    PREV_PAGE,
    HANDLE_NUMBER,
 } from "./types";
import axios from "axios";

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