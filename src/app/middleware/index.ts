import { ERROR, FETCH_ERROR, GOT_WEATHER } from "../actions";
import Axios from "axios";
import { API_KEY } from "config";

export const fetchMiddleware = store => next => action => {
  if (action.type === "fetch") {
    Axios.get(action.url, {
      params: {
        country: "in",
        apiKey: API_KEY
      }
    }).then(response => {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        store.dispatch({
          type: ERROR,
          payload: response.status
        });
      }
      // Examine the text in the response
      response
        ? store.dispatch({
            type: GOT_WEATHER,
            payload: response.data
          })
        : store.dispatch({
            type: FETCH_ERROR,
            payload: "AN ERROR OCCURED"
          });
    });
  }

  return next(action);
};
