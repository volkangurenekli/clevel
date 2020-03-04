import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function customersListReducer(
  state = initialState.show,
  action
) {
  switch (action.type) {
    case actionTypes.SELECT_SHOW:
      return action.payload;
    default:
      return state;
  }
}
