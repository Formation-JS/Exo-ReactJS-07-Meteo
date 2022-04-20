import { useWeatherAjax } from '../../hooks/weather-hook';
import LoadingDisplay from '../loading-display/loading-display';

const WeatherFetch = ({ city }) => {
    const [data, error, isLoading] = useWeatherAjax(city);

    return (
        <div>
            {isLoading ? (
                <LoadingDisplay />
            ) : error ? (
                <p>Error :p</p>
            ) : data && (
                <code>{JSON.stringify(data)}</code>
            )}
        </div>
    );
};


export default WeatherFetch;