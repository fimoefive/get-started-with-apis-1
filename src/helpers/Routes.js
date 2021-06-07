import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Home from '../Components/Home';
import Jokes from '../Components/jokes';
import Lyrics from '../Components/lyrics';
// import Weather from '../Components/weather';

function Routes({
  allJokes, setAllJokes,
  artists, setArtists,
  singleSong, setSingleSong,
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
              artists={artists} setArtists={setArtists} singleSong={singleSong} setSingleSong={setSingleSong}
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
  artists: PropTypes.array,
  setArtists: PropTypes.func,
  singleSong: PropTypes.array,
  setSingleSong: PropTypes.func,
  showLyric: PropTypes.array,
  setShowLyric: PropTypes.func,
  showArtist: PropTypes.array,
  setShowArtist: PropTypes.func
};

export default Routes;
