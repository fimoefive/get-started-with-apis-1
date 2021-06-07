import axios from 'axios';

const baseUrl = 'https://official-joke-api.appspot.com/jokes/ten';

const getJokes = () => new Promise((resolve, reject) => {
  axios.get(baseUrl)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getJokes;
