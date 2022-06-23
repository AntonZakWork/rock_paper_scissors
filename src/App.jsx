import React from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import Game from './Game/Game';
import Header from './Header/Header';
import Result from './Result/Result';

function App() {
  const { playerChoice } = useSelector((state) => state.game);
  return (
    <>
      <div className="App">
        <Header />
        {playerChoice ? <Result /> : <Game />}
      </div>
    </>
  );
}

export default App;
