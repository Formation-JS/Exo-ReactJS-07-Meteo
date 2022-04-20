import CitySearch from '../../components/city-search/city-search';

const WeatherApp = () => {

    const handleSearch = (city) => {
        console.log(city);
    };


    return (
        <main>
            <CitySearch onSearch={handleSearch} />

        </main>
    );
};

export default WeatherApp;