import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Lizard from '../Items/Lizzard';
import Paper from '../Items/Paper';
import Rock from '../Items/Rock';
import Scissors from '../Items/Scissors';
import Spock from '../Items/Spock';
import ResultLoader from '../ResultLoader/ResultLoader';
import { lizard, lose, paper, rock, scissors, spock, win } from '../Store/Actions';
import { changePause, reset } from '../Store/GameSlice';
import './Result.scss';
const Result = () => {
  const { playerChoice, computerChoice, result, pause } = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const [played, setPlayed] = useState(false);
  const showResults = () => {
    dispatch(changePause());
    setPlayed(true);
  };
  useEffect(() => {
    const timeout = setTimeout(showResults, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <div className="resultContainer">
        <div className={result === win && !pause ? 'player winner' : 'player'}>
          <div className="resultHeader">YOU PICKED</div>
          <div className="choice">
            {playerChoice === scissors && <Scissors />}
            {playerChoice === rock && <Rock />}
            {playerChoice === paper && <Paper />}
            {playerChoice === lizard && <Lizard />}
            {playerChoice === spock && <Spock />}
          </div>
        </div>
        <div className="result">
          {played && (
            <div>
              <div>{result}</div>
              <button onClick={() => dispatch(reset())}>Play again</button>
            </div>
          )}
        </div>
        <div className={result === lose ? 'computer winner' : 'computer'}>
          <div className="resultHeader">COMPUTER PICKED</div>
          {pause ? (
            <ResultLoader />
          ) : (
            <div className="choice">
              {computerChoice === scissors && <Scissors />}
              {computerChoice === rock && <Rock />}
              {computerChoice === paper && <Paper />}
              {computerChoice === lizard && <Lizard />}
              {computerChoice === spock && <Spock />}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Result;
