import {
  ON_REQUEST_DATA,
  ON_LOAD_DATA_ERROR,
  ON_LOAD_DATA_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {
  data: null,
  isLoading: false,
  requestError: false
};

export default function main(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ON_REQUEST_DATA:
      return { ...state, isLoading: true, requestError: false };
    case ON_LOAD_DATA_ERROR:
      return { ...state, data: null, isLoading: false, requestError: true };
    case ON_LOAD_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        requestError: false
      };
    default:
      return state;
  }
}
