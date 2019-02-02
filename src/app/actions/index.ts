import Axios from "axios";
import { API_KEY, ROOT_URL } from "config";

export const SEARCH_WEATHER = "SEARCH_WEATHER";
// An async function here throws error even with an middleware in place.
// Do not know the reason investigating! A shortcut applied hence
export const searchWeather = (cityName: string) => {
  const payload = async () => {
    return await Axios.get(ROOT_URL, {
      params: {
        q: cityName,
        APPID: API_KEY
      }
    });
  };
  const data = payload();

  return {
    type: SEARCH_WEATHER,
    payload: data
      .then(data => {
        return data.data;
      })
      .catch(err => {
        alert("Not found");
        return null;
      })
  };
};
