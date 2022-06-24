import React from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import Buttons from './Buttons/Buttons';
import Game from './Game/Game';
import Header from './Header/Header';
import Result from './Result/Result';
import Rules from './Rules/Rules';

function App() {
  const { playerChoice, rulesOpen } = useSelector((state) => state.game);
  return (
    <>
      <div className="App">
        {rulesOpen ? <Rules /> : ''}
        <Header />
        {playerChoice ? <Result /> : <Game />}
        <Buttons />
      </div>
    </>
  );
}

export default App;
