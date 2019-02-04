import { request } from "../api";

import {
  ON_REQUEST_DATA,
  ON_LOAD_DATA_SUCCESS,
  ON_LOAD_DATA_ERROR
} from "./types";

export function onRequestData(data) {
  return (dispatch, getStore) => {
    dispatch({ type: ON_REQUEST_DATA });

    return fetchData(data)
      .then(response => {
        if (response[0].success) {
          dispatch({
            type: ON_LOAD_DATA_SUCCESS,
            payload: response[0].data
          });
        } else {
          dispatch({ type: ON_LOAD_DATA_ERROR });
        }
      })
      .catch(() => dispatch({ type: ON_LOAD_DATA_ERROR }));
  };
}

function fetchData(data) {
  const dateFormat = data.format("YYYY-MM-DD");
  return request(dateFormat);
}
