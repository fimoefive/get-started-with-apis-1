import axios from 'axios';
import firebaseConfig from './apiKeys';
// API CALL api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}

const getWeather = (city) => new Promise((resolve, reject) => {
  axios.get(`https://api.openweathermap.org/data/2.5/onecall?q=${city}4&exclude=hourly,daily&appid=${firebaseConfig.apiKey}&units=imperial`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getWeather;
