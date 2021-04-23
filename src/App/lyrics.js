import React, { useState, useEffect } from 'react';
import getLyrics from '../helpers/lyricsData';
import './App.scss';

function Lyrics() {
  const [allArtists, setAllArtists] = useState();
  const [singleSong, setSingleSong] = useState([]);
  const [showArtist, setShowArtist] = useState(true);
  const [showLyric, setShowLyric] = useState(true);

  // console.warn(allArtists);
  // console.warn(getLyrics('ColdPlay', 'Adventure of a Lifetime'));

  const artistInput = () => {
    setShowArtist();
    setShowLyric(false);
  };

  const handleLyrics = () => {
    setShowLyric(true);
  };

  const handleNewSong = () => {
    setSingleSong(allArtists);
    setShowLyric(false);
  };

  useEffect(() => {
    getLyrics('ColdPlay', 'Adventure of a Lifetime')
      .then((lyrics) => {
        console.warn(getLyrics('ColdPlay', 'Adventure of a Lifetime'));
        setAllArtists(lyrics);
        setSingleSong(lyrics);
        setShowArtist(true);
        setShowLyric(true);
      });
  }, []);

  return (
    <>
      <div className='Lyrics'>
        <h1>LYRICS</h1>
        <h2 className="song">{showArtist && singleSong.artist}</h2>
        <h2 className="song">{showLyric && singleSong.title}</h2>

        <input onKeyPress={artistInput} className="input" placeholder="Get Artist"></input>
        <input onKeyPress={artistInput} className="input" placeholder="Get Song"></input>
        <div></div>
        {showArtist && !showLyric ? <button color="info" onClick={handleLyrics} className="button">Get Lyrics</button> : ''}
        {showArtist && showLyric ? <button color="info" onClick={handleNewSong} className="button">Another Song</button> : ''}
      </div>
    </>
  );
}

export default Lyrics;
