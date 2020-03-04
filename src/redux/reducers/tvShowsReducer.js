import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function customersListReducer(
  state = initialState.shows,
  action
) {
  switch (action.type) {
    case actionTypes.GET_SHOWS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
