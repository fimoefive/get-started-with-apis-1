import React, { useState, useEffect } from 'react';
import getJokes from '../helpers/jokesData';
import '../styles/index.scss';

function Jokes() {
  const [allJokes, setAllJokes] = useState();
  const [singleJoke, setSingleJoke] = useState([]);
  const [showJoke, setShowJoke] = useState(true);
  const [showPunchline, setShowPunchline] = useState(true);

  // console.warn(allJokes);

  const jokeClick = () => {
    setShowJoke(true);
    setShowPunchline(false);
  };

  const handlePunchline = () => {
    setShowPunchline(true);
  };

  const handleNewJoke = () => {
    setSingleJoke(allJokes[Math.floor(Math.random() * allJokes.length)]);
    setShowPunchline(false);
  };

  useEffect(() => {
    getJokes()
      .then((jokes) => {
        setAllJokes(jokes);
        setSingleJoke(jokes[Math.floor(Math.random() * jokes.length)]);
        setShowJoke(false);
        setShowPunchline(false);
      });
  }, []);

  return (

    <div className='Jokes'>
      <h1>JOKES</h1>
      <h2 className="joke">{showJoke && singleJoke.setup}</h2>
      <h2 className="joke">{showPunchline && singleJoke.punchline}</h2>

      {!showJoke && <button color="info" onClick={jokeClick} className="button">Get A Joke</button>}
      {showJoke && !showPunchline ? <button color="info" onClick={handlePunchline} className="button">Get Punchline</button> : ''}
      {showJoke && showPunchline ? <button color="info" onClick={handleNewJoke} className="button">Another Joke?</button> : ''}
    </div>
  );
}

export default Jokes;
