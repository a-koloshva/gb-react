import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../../store/weather/actions";
import {
  selectErrorMessage,
  selectIsError,
  selectIsLoading,
  selectWeather,
} from "../../store/weather/selectors";

export const Weather = () => {
  const weather = useSelector(selectWeather);
  const errorMsg = useSelector(selectErrorMessage);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  const dispatch = useDispatch();
  const requestWeather = () => {
    dispatch(getWeather());
  };

  useEffect(() => {
    requestWeather();
  }, []);

  return (
    <>
      <h3>Weather here!</h3>
      {isLoading && <h4>Loading...</h4>}
      {!isError ? (
        typeof weather.main != "undefined" ? (
          <div key={weather.id}>
            <p>
              {weather.name}, {weather.sys.country}
            </p>
            <p>{weather.main.temp}</p>
          </div>
        ) : (
          ""
        )
      ) : (
        <>
          <h4>Error: {errorMsg} </h4>
          <button onClick={requestWeather}>Try Again, Please!</button>
        </>
      )}
    </>
  );
};
