import {
  ERROR_WEATHER,
  FETCH_WEATHER_ERROR,
  GOT_WEATHER,
  SEARCH_CITY_NEWS,
  GOT_CITY_NEWS,
  FETCH_NEWS_ERROR,
  ERROR_NEWS
} from "../actions";
import Axios from "axios";
import { API_KEY } from "config";

export const getAllNewsMiddleware = store => next => action => {
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
          type: ERROR_WEATHER,
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
            type: FETCH_WEATHER_ERROR,
            payload: "AN ERROR OCCURED"
          });
    });
  }
  if (action.type === "fetchNews" && action.city) {
    Axios.get(action.url, {
      params: {
        q: action.city,
        apiKey: API_KEY
      }
    })
      .then(response => {
        // Examine the text in the response
        response
          ? store.dispatch({
              type: GOT_CITY_NEWS,
              payload: response.data
            })
          : store.dispatch({
              type: FETCH_NEWS_ERROR,
              payload: "AN ERROR OCCURED"
            });
      })
      .catch(err => {
        store.dispatch({
          type: ERROR_NEWS,
          payload: err
        });
      });
  }
  return next(action);
};
