import React, { useState } from 'react';
// import { Button } from 'reactstrap';
import getWeather from '../helpers/weatherData';
import '../styles/index.scss';

function Weather() {
  const [city, setCity] = useState('');
  // const [state, setState] = useState('');
  const [data, setData] = useState(null);
  // console.warn(getWeather());

  async function getWeatherForecast() {
    await getWeather(city)
      .then((response) => setData(response));
  }

  return (
    <>
      <div className='Weather'>
        <div className="weatherContainer">
          <h3>{data.name}</h3>
          <p className="center">{data.weather[0].description}</p>
          <h4>{data.main.temp}</h4>
        </div>
        <div className="form">
          <form onSubmit={(e) => {
            e.preventDefault();
            getWeatherForecast();
          }}>
            <h3>Weather Form</h3>
            <input type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            {/* <input type="text" placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
            /> */}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Weather;
