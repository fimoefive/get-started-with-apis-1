import axios from 'axios';

// https://api.lyrics.ovh/v1/artist/title

// const getLyrics = (artist, song) => new Promise((resolve, reject) => {
//   axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`)
//     .then((response) => resolve(response.data))
//     .catch((error) => reject(error));
// });

const getLyrics = (artist, title) => new Promise((resolve, reject) => {
  axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getLyrics;
