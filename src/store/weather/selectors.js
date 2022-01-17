import { REQUEST_STATUS } from "../../utils/constants";

export const selectWeather = (state) => state.weather.data;
export const selectErrorMessage = (state) => state.weather.request.error;
export const selectIsLoading = (state) =>
  state.weather.request.status === REQUEST_STATUS.PENDING;
export const selectIsError = (state) =>
  state.weather.request.status === REQUEST_STATUS.FAILURE;
