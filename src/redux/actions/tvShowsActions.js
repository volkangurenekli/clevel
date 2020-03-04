import * as actionTypes from "./actionTypes";
import axios from "axios";

export function getShowsSuccess(shows) {
  return { type: actionTypes.GET_SHOWS_SUCCESS, payload: shows };
}

// export function getShows(query) {
//   return dispatch => {
//     let url = `http://api.tvmaze.com/search/shows?q=${query}`;
//     return fetch(url)
//       .then(response => response.json())
//       .then(result => dispatch(getShowsSuccess(result)));
//   };
// }

export function getShows(query) {
  return async function(dispatch) {
    await axios
      .get(`http://api.tvmaze.com/search/shows?q=${query}`)
      .then(data => dispatch(getShowsSuccess(data.data)))
      .catch(err => {
        console.log(err);
        return null;
      });
  };
}
