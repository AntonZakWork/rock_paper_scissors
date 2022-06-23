import { createSlice } from '@reduxjs/toolkit';
import { draw, lose, paper, rock, scissors, win } from './Actions';

const initialState = {
  playerChoice: null,
  computerChoice: null,
  result: null,
  score: 0,
};
export const GameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    getChoice(state, action) {
      state.playerChoice = action.payload;
      const blessRng = Math.floor(Math.random() * 3);
      if (blessRng === 1) state.computerChoice = scissors;
      else blessRng < 1 ? (state.computerChoice = rock) : (state.computerChoice = paper);
      if (action.payload === state.computerChoice) {
        state.result = draw;
      } else {
        switch (action.payload) {
          default:
            return state;
          case scissors:
            state.computerChoice === rock ? (state.result = lose) : (state.result = win);
            break;
          case paper:
            state.computerChoice === scissors ? (state.result = lose) : (state.result = win);
            break;
          case rock:
            state.computerChoice === paper ? (state.result = lose) : (state.result = win);
            break;
        }
      }
      if (state.result === win) {
        state.score += 1;
      }
    },
    reset(state) {
      state.playerChoice = null;
      state.computerChoice = null;
      state.result = null;
    },
  },
});

export const { getChoice, reset } = GameSlice.actions;
export default GameSlice.reducer;
