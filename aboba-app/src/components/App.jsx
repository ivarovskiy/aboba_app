import React from 'react';
import { useState } from "react";
import phrasesList from './pharses.json';
import './App.scss';
import smile from '../images/smile.svg';

const App = () => {
  let randomIndex = Math.floor(Math.random() * phrasesList.length);
  let phrase = phrasesList[randomIndex];
  const [text, setText] = useState('');

  function textChange() {
    randomIndex = Math.floor(Math.random() * phrasesList.length);
    phrase = phrasesList[randomIndex];
    setText(phrase);
  }

  function callTg() {
    alert('https://t.me/Ygrik_Kovalev');
  }

  return (
    <>
      <div className="card">
        <div className="card__title">
          <h1 className="card__title-text">
            Привет
          </h1>
        </div>

        <div className="card__text-container">
          <span className="card__text">
            {text}
          </span>
        </div>
      </div>

      <button className="card__author" onClick={() => callTg()}>
        Напиши мне )
      </button>

      <button className="card__button" onClick={() => textChange()}>
          КЛАЦАЙ !
      </button>
    </>
  );
};

export default App;
