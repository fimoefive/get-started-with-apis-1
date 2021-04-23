import React, { useState, useEffect } from 'react';
import getLyrics from '../helpers/lyricsData';
import './App.scss';

function Lyrics() {
  const [artists, setArtists] = useState();
  const [singleSong, setSingleSong] = useState([]);
  const [showArtist, setShowArtist] = useState(false);
  const [showLyric, setShowLyric] = useState(false);

  // console.warn(artists);
  // console.warn(getLyrics('ColdPlay', 'Adventure of a Lifetime'));

  const artistInput = () => {
    setShowArtist();
    setShowLyric(false);
  };

  const handleLyrics = () => {
    if (showLyric === true) {
      setShowLyric(false);
    } else {
      setShowLyric(true);
      getLyrics(artists, singleSong)
        .then((lyrics) => console.warn(lyrics));
    }
  };

  const handleNewSong = () => {
    setArtists(artists);
    setSingleSong(singleSong);
    setShowLyric(false);
  };

  useEffect(() => {
    getLyrics('ColdPlay', 'Adventure of a Lifetime')
      .then((lyrics) => {
        console.warn(getLyrics('ColdPlay', 'Adventure of a Lifetime'));
        setArtists(lyrics);
        setSingleSong(lyrics);
        setShowArtist(true);
        setShowLyric(true);
      });
  }, []);

  return (
    <>
      <div className='Lyrics'>
        <h1>LYRICS</h1>
        <h2 className="song">{showArtist && artists.artist}</h2>
        <h2 className="song">{showLyric && singleSong.title}</h2>
        <div className="form">
          <form>
            <label>Artist: </label>
            <input type="text" id="artistName" onChange={artistInput} className="input" placeholder="Artist Name"></input>
            <br></br>
            <label>Song Title: </label>
            <input type="text" id="songTitle" onChange={artistInput} className="input" placeholder="Song"></input>
            <br></br>
            {showArtist && showLyric ? <button color="info" onClick={handleLyrics} className="button">Get Lyrics</button> : ''}
            {showArtist && showLyric ? <button color="info" onClick={handleNewSong} className="button">Another Song</button> : ''}
          </form>
        </div>
      </div>
    </>
  );
}

export default Lyrics;
