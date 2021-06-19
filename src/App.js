import React, { useState } from 'react';

import useInfiniteScroll from './useInfiniteScroll';
import './App.css';
import Header from './components/Header';
import Mainboard from './components/Mainboard';
import data from './nyc_ttp_pins.json';

function App() {
  const [jsonData] = useState(data);
  const getUrl = (arr) => {
    const obj = arr
      .map((el) => {
        return el.images.orig.url;
      })
      .sort((a, b) => 0.5 - Math.random());
    return obj;
  };
  const [pins, setNewPins] = useState(getUrl(jsonData));
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMorePins);
  const getImage = (input) => {
    const query = input.toLowerCase();
    const obj = jsonData
      .map((el) => {
        const titles = el.title.toLowerCase();
        if (titles.includes(query)) {
          return el.images.orig.url;
        } else {
          return [];
        }
      })
      .filter((el) => typeof el === 'string');

    return obj;
  };

  const onSearchSubmit = (term) => {
    let submitResult = getImage(term);

    let newPins = [...submitResult, ...pins];
    newPins.sort((a, b) => 0.5 - Math.random());
    setNewPins(newPins);
  };
  function fetchMorePins() {
    setTimeout(() => {
      setNewPins((prevState) => [...prevState, ...pins]);
      setIsFetching(false);
    }, 2000);
  }

  return (
    <div className='app'>
      <Header onSubmit={onSearchSubmit} />
      <Mainboard pins={pins} />
      {isFetching}
    </div>
  );
}

export default App;
