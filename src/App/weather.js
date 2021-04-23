import React, { useState } from 'react';
import getWeather from '../helpers/weatherData';
import '../styles/index.scss';

function Weather() {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [data, setData] = useState(null);

  return (
    <>
      <div className='Weather'>
        <div className="weatherContainer">
          <h3>{data.name}</h3>
          <p className="center">{data.weather[0].description}</p>
        </div>
        <div className="form">
          <form onSubmit={(e) => {
            e.preventDefault();
            getWeather();
          }}>
            <h3>Weather Form</h3>
            <input type="text" placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input type="text" placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Weather;
