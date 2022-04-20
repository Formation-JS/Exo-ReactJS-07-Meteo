const WeatherDisplay = ({ id, city, country, weather, temperature, iconUrl, updateDate, onCallRefresh }) => (
    <div>
        <h2>{city} [{country}]</h2>
        <p>Il fait {temperature}°c. Le temps est "{weather}"</p>
        <img src={iconUrl} alt={'Icone ' + weather} />
        <p>Last update: {updateDate.toLocaleString()}</p>
        <button onClick={() => onCallRefresh(id)}>Actualiser</button>
    </div>
);

export default WeatherDisplay;