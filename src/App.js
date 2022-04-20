import './App.css';
import MainHeader from './containers/main-header/main-header';
import MainFooter from './containers/main-footer/main-footer';
import WeatherApp from './containers/weather-app/weather-app';

function App() {
  return (
    <div className="App">
      <MainHeader />
      <WeatherApp />
      <MainFooter />
    </div>
  );
}

export default App;
