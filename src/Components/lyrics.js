import React, { useState } from 'react';
import { Button } from 'reactstrap';
import getLyrics from '../helpers/lyricsData';

import '../styles/index.scss';

function Lyrics() {
  const [artist, setArtists] = useState();
  const [song, setSong] = useState([]);
  const [showLyric, setShowLyric] = useState(false);
  const [showArtist, setShowArtist] = useState({});

  // const artistInput = (e) => {
  //   setShowArtist(e.target.value);
  //   setShowLyric(e.target.value);
  // };

  const handleLyrics = () => {
    if (showLyric === true) {
      setShowLyric(false);
    } else {
      setShowLyric(true);
      getLyrics(artist, song)
        .then((lyrics) => setShowArtist(lyrics));
    }
  };

  // const handleNewSong = () => {
  //   setArtists(artist);
  //   setSong(song);
  //   setShowLyric(false);
  // };

  // useEffect(() => {
  //   getLyrics('ColdPlay', 'Adventure of a Lifetime')
  //     .then((lyrics) => {
  //       console.warn(getLyrics('ColdPlay', 'Adventure of a Lifetime'));
  //       setArtists(lyrics);
  //       setSong(lyrics);
  //       setShowArtist(true);
  //       setShowLyric(true);
  //     });
  // }, []);

  return (
    <>
      <div className='Lyrics'>
        <h1>LYRICS GEN</h1>
        {/* <h2 className="song">{showArtist && artist.name}</h2>
        <h2 className="song">{showLyric && song.title}</h2> */}
        <div className="form">
          <form>
            <label>Artist: </label>
            <input type="text"
              name="artistName"
              id="artistName"
              placeholder="Artist Name"
              onChange={(e) => {
                setArtists(e.target.value);
              }}
            // onChange={artistInput}>
            />
            <br></br>

            <label>Song: </label>
            <input type="text"
              name="songTitle"
              id="songTitle"
              placeholder="Song Title"
              onChange={(e) => {
                setSong(e.target.value);
              }}
            // onChange={artistInput}>
            />
            <br></br>
          </form>
          {/* {showArtist && showLyric ? <button color="info" onClick={handleLyrics} className="button">Get Lyrics</button> : ''}
          {showArtist && showLyric ? <Button color="info" onClick={handleNewSong} className="button">Another Song</Button> : ''} */}
          <p>{showArtist.lyrics}</p>
          <Button color="info" onClick={handleLyrics}>{showArtist ? 'More Lyrics' : 'Find Song'}</Button>
        </div>
      </div>
    </>
  );
}

export default Lyrics;
