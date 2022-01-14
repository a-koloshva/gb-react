import { api } from "../../utils/constants";

export const GET_WEATHER_REQUEST = "WEATHER::GET_WEATHER_REQUEST";
export const GET_WEATHER_SUCCESS = "WEATHER::GET_WEATHER_SUCCESS";
export const GET_WEATHER_FAILURE = "WEATHER::GET_WEATHER_FAILURE";

export const getWeatherRequest = () => ({
  type: GET_WEATHER_REQUEST,
});

export const getWeatherSuccess = (data) => ({
  type: GET_WEATHER_SUCCESS,
  payload: data,
});

export const getWeatherFailure = (err) => ({
  type: GET_WEATHER_FAILURE,
  payload: err,
});

export const getWeather = () => (dispatch) => {
  dispatch(getWeatherRequest);

  fetch(`${api.base}weather?q=Moscow&units=metric&APPID=${api.key}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request error: " + response.status);
      }
      return response.json();
    })
    .then((result) => {
      dispatch(getWeatherSuccess(result));
    })
    .catch((e) => {
      dispatch(getWeatherFailure(e.message));
    });
};
