import axios from 'axios';
import { useEffect, useState } from 'react';

const WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather';

export const useWeatherAjax = (city) => {
    // Le state du Hook
    const [isLoading, setLoading] = useState(true);
    const [onError, setError] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        // Reset du state
        setLoading(true);
        setError(false);
        setData(null);

        // Requete Ajax
        axios.get(WEATHER_URL, {
            params: {
                q: city,
                appid: process.env.REACT_APP_WEATHER_KEY,
                units: 'metric',
                lang: 'fr'
            }
        }).then(({ data }) => {
            setData({
                id: 2792413,
                city: data.name,
                country: data.sys.country,
                weather: data.weather[0].description,
                temperature: data.main.temp,
                iconUrl: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                updateDate: new Date(data.dt * 1000)
            });
        }).catch((e) => {
            setError(true);
        }).finally(() => {
            setLoading(false);
        });
    }, [city]);

    console.log('State Hook', data, onError, isLoading);

    return [data, onError, isLoading];
}; 