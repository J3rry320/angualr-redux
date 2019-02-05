import Axios from "axios";
import { API_KEY, ROOT_URL } from "config";
import { from } from "rxjs";

export const SEARCH_WEATHER = "SEARCH_WEATHER";
export const GOT_WEATHER = "GOT_WEATHER";
export const ERROR = "fetchResponseError";
export const FETCH_ERROR ='fetchError'
// An async function here throws error even with an middleware in place.
// Do not know the reason investigating! A shortcut applied hence
export const searchWeather = (cityName: string) => {
  let payloadData;
  const request = Axios.get(ROOT_URL, {
    params: {
      q: cityName,
      APPID: API_KEY
    }
  });
  const observable = from(request);
  observable.forEach(data => {
    payloadData = data;
  });
  observable.subscribe(function(data) {
    payloadData = data.data;
  });
  return {
    type: SEARCH_WEATHER,
    payload: payloadData
  };
};
