import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Mainboard from './components/Mainboard';
import data from './nyc_ttp_pins.json';

function App() {
  const [jsonData] = useState(data);
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

    // map returns new arr
  };
  const onSearchSubmit = (term) => getImage(term);
  console.log(onSearchSubmit('kitten'));

  return (
    <div className='app'>
      <Header onSubmit={onSearchSubmit} />
      <Mainboard jsonData={jsonData} />
    </div>
  );
}

export default App;
