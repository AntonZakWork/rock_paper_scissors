import React from 'react';
import Lizard from '../Items/Lizzard';
import Paper from '../Items/Paper';
import Rock from '../Items/Rock';
import Scissors from '../Items/Scissors';
import Spock from '../Items/Spock';
import './BonusGame.scss';
const BonusGame = () => {
  return (
    <>
      <div className="bonusGame">
        <div className="gameContainer">
          <div className="backGround_svg">
            <svg xmlns="http://www.w3.org/2000/svg" width="329" height="313">
              <path
                fill="none"
                stroke="#000"
                strokeWidth="15"
                d="M164.5 9.27L9.26 122.06l59.296 182.495h191.888L319.74 122.06 164.5 9.271z"
                opacity=".2"
              />
            </svg>
            <Rock />
            <Paper />
            <Scissors />
            <Spock />
            <Lizard />
          </div>
        </div>
      </div>
    </>
  );
};

export default BonusGame;
