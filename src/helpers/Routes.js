import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Home from '../Components/Home';
import Jokes from '../Components/jokes';
// import Weather from '../Components/weather';
// import Lyrics from '../Components/lyrics';

function Routes({ allJokes, setAllJokes }) {
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

          {/* <Route
            path='/lyrics'
            component={() => <AddPlayer />}
          />

          <Route
            path='/weather'
            component={() => <AddPlayer />}
          /> */}

          <Route path='*' component={Home} />
        </Switch>
      </div>
    </>
  );
}

Routes.propTypes = {
  allJokes: PropTypes.array,
  setAllJokes: PropTypes.func
};

export default Routes;
