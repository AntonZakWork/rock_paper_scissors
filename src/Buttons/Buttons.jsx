import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleRules } from '../Store/GameSlice';
import './Buttons.scss';
const Buttons = () => {
  const dispatch = useDispatch();
  return (
    <div className="buttons">
      <button onClick={() => dispatch(toggleRules())}>RULES</button>
    </div>
  );
};

export default Buttons;
