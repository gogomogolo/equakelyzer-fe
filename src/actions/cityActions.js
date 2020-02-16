import {FETCH_CITIES} from "./types";

export const fetchCities = () => dispatch => {
    fetch('http://localhost:8080/earthquakehistory/ANKARA')
        .then(res => res.json())
        .then(cities =>
            dispatch(
                {
                    type: FETCH_CITIES,
                    message: cities
                }
            )
        );
};
