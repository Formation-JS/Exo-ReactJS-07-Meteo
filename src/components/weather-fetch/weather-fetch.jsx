import { useWeatherAjax } from '../../hooks/weather-hook';
import ErrorDisplay from '../error-display/error-display';
import LoadingDisplay from '../loading-display/loading-display';
import WeatherDisplay from '../weather-display/weather-display';

const WeatherFetch = ({ city }) => {
    const [data, error, isLoading, reload] = useWeatherAjax(city);

    const handleRefresh = () => {
        reload();
    };

    return (
        <div>
            {isLoading ? (
                <LoadingDisplay />
            ) : error ? (
                <ErrorDisplay errorMessage='Ville non trouvé' />
            ) : data && (
                <WeatherDisplay {...data} onCallRefresh={handleRefresh} />
            )}
        </div>
    );
};


export default WeatherFetch;