import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Paper from '../Items/Paper';
import Rock from '../Items/Rock';
import Scissors from '../Items/Scissors';
import { paper, rock, scissors } from '../Store/Actions';
import { reset } from '../Store/GameSlice';
import './Result.scss';
const Result = () => {
  const dispatch = useDispatch();
  const { playerChoice, computerChoice, result } = useSelector((state) => state.game);
  return (
    <>
      <div className="resultContainer">
        <div className="player">
          <div className="resultHeader">YOU PICKED</div>
          <div className="choice">
            {playerChoice === scissors && <Scissors />}
            {playerChoice === rock && <Rock />}
            {playerChoice === paper && <Paper />}
          </div>
        </div>
        <div className="result">
          {result && (
            <div>
              <div>{result}</div>
              <button onClick={() => dispatch(reset())}>Play again</button>
            </div>
          )}
        </div>
        <div className="computer">
          <div className="resultHeader">COMPUTER PICKED</div>
          <div className="choice">
            {computerChoice === scissors && <Scissors />}
            {computerChoice === rock && <Rock />}
            {computerChoice === paper && <Paper />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
