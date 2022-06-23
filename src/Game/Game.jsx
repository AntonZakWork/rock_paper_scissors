import React from 'react';
import Paper from '../Items/Paper';
import Rock from '../Items/Rock';
import Scissors from '../Items/Scissors';
import './Game.scss';
const Game = () => {
  return (
    <>
      <div className="gameContainer">
        <div className="backGround_svg">
          <svg width="313" height="278" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 313 278">
            <path
              stroke="#000"
              strokeWidth="15"
              fill="none"
              opacity=".2"
              d="M156.5 262 300 8H13z"
            />
          </svg>
          <Rock />
          <Paper />
          <Scissors />
        </div>
      </div>
    </>
  );
};

export default Game;
