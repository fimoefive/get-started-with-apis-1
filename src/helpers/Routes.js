import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Home from '../Components/Home';
import Jokes from '../Components/jokes';
import Lyrics from '../Components/lyrics';
// import Weather from '../Components/weather';

function Routes({
  allJokes, setAllJokes,
  artist, setArtists,
  song, setSong,
  showLyric, setShowLyric,
  showArtist, setShowArtist
}) {
  return (
    <>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route
            exact
            path='/jokes'
            component={() => <Jokes allJokes={allJokes} setAllJokes={setAllJokes}
            />}
          />

          <Route
            path='/lyrics'
            component={() => <Lyrics
              artist={artist} setArtists={setArtists} song={song} setSong={setSong}
              showLyric={showLyric} setShowLyric={setShowLyric}
              showArtist={showArtist} setShowArtist={setShowArtist}
            />}
          />

          {/* <Route
            path='/weather'
            component={() => <Weather />}
          /> */}

          <Route path='*' component={Home} />
        </Switch>
      </div>
    </>
  );
}

Routes.propTypes = {
  allJokes: PropTypes.array,
  setAllJokes: PropTypes.func,
  artist: PropTypes.array,
  setArtists: PropTypes.func,
  song: PropTypes.array,
  setSong: PropTypes.func,
  showLyric: PropTypes.array,
  setShowLyric: PropTypes.func,
  showArtist: PropTypes.array,
  setShowArtist: PropTypes.func
};

export default Routes;
