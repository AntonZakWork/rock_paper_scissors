import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset, toggleBonusMode } from '../Store/GameSlice';
import { toggleRules } from '../Store/GameSlice';
import './Buttons.scss';
const Buttons = () => {
  const dispatch = useDispatch();
  const { bonusMode } = useSelector((state) => state.game);
  return (
    <div className="buttons">
      <button
        className="bonusModeButton"
        onClick={() => {
          dispatch(toggleBonusMode());
          dispatch(reset());
        }}>
        {bonusMode ? 'USUAL MODE' : 'BONUS MODE'}
      </button>
      <button className="rulesButton" onClick={() => dispatch(toggleRules())}>
        RULES
      </button>
    </div>
  );
};

export default Buttons;
