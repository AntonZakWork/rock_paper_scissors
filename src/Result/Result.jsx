import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Paper from '../Items/Paper';
import Rock from '../Items/Rock';
import Scissors from '../Items/Scissors';
import ResultLoader from '../ResultLoader/ResultLoader';
import { lose, paper, rock, scissors, win } from '../Store/Actions';
import { changePause, reset } from '../Store/GameSlice';
import './Result.scss';
const Result = () => {
  const { playerChoice, computerChoice, result, pause } = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const showResults = () => {
    dispatch(changePause());
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
          </div>
        </div>
        <div className="result">
          {result && !pause && (
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
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Result;
