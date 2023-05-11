import React from 'react';
import { useState } from 'react';
import { sculptureList } from './data.js';
import './App.css';

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const handleNextClick = () => {
    if (index >= sculptureList.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handlePreviousClick = () => {
    if (index <= 0) {
      setIndex(sculptureList.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const handleMoreClicks = () => {
    setShowMore(!showMore);
  };

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>Next</button>
      <button onClick={handlePreviousClick}>Previous</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClicks}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </>
  );
};

export default function App() {
  return (
    <>
      <Gallery />
    </>
  );
}
