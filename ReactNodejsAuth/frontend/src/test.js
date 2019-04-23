import React from 'react';
import Anime from 'react-anime';

const Test = (props) => (
  <Anime delay={(e, i) => i * 100}
         scale={[.1, .9]}>
    <div className="blue"/>
    <div className="green"/>
    <div className="red"/>
  </Anime>
);

export default Test