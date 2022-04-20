import { useState } from 'react';
import CitySearch from '../../components/city-search/city-search';
import WeatherFetch from '../../components/weather-fetch/weather-fetch';

const WeatherApp = () => {
    const [city, setCity] = useState(null);

    const handleSearch = (citySearch) => {
        setCity(citySearch);
    };

    return (
        <main>
            <CitySearch onSearch={handleSearch} />
            {city && (
                <WeatherFetch city={city} />
            )}
        </main>
    );
};

export default WeatherApp;