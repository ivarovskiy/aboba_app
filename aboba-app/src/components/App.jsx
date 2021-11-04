import React from 'react';
import { useState } from "react";
import phrasesList from './pharses.json';
import './App.scss';

const App = () => {
  let randomIndex = Math.floor(Math.random() * phrasesList.length);
  let phrase = phrasesList[randomIndex];
  const [text, setText] = useState('');

  function textChange() {
    randomIndex = Math.floor(Math.random() * phrasesList.length);
    phrase = phrasesList[randomIndex];
    setText(phrase);
  }

  return (
    <>
      <div className="card">
        <div className="card__title">
          <h1 className="card__title-text">
            Привет
          </h1>
          <img className="card__smile" src="../images/smile.svg" alt="=)" />
        </div>

        <div className="card__text-container">
          <span className="card__text">
            {text}
          </span>
        </div>
      </div>

      <a href="tel: Tg: @Ygrik_Kovalev">
        <button className="card__author">
          Напиши мне )
        </button>
      </a>

      <button className="card__button" onClick={() => textChange()}>
          КЛАЦАЙ !
      </button>
    </>
  );
};

export default App;
