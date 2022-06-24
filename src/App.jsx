import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import BonusGame from './BonusGame/BonusGame';
import Buttons from './Buttons/Buttons';
import Game from './Game/Game';
import Header from './Header/Header';
import Result from './Result/Result';
import Rules from './Rules/Rules';

function App() {
  const { playerChoice, rulesOpen, bonusMode } = useSelector((state) => state.game);

  useEffect(() => {
    localStorage.setItem('bonusMode', bonusMode);
  }, [bonusMode]);
  return (
    <>
      <div className="App">
        {rulesOpen ? <Rules /> : ''}
        <Header />

        {bonusMode ? (
          playerChoice ? (
            <Result />
          ) : (
            <BonusGame />
          )
        ) : playerChoice ? (
          <Result />
        ) : (
          <Game />
        )}
        {/* {playerChoice ? <Result /> : <Game />} */}
        <Buttons />
      </div>
    </>
  );
}

export default App;
