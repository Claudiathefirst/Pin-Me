import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Mainboard from './components/Mainboard';
import data from './nyc_ttp_pins.json';

function App() {
  const [jsonData] = useState(data);

  const [{ pin_join, images }] = jsonData;
  return (
    <div className='app'>
      <Header pin_join={pin_join} />
      <Mainboard image={images} />
    </div>
  );
}

export default App;
