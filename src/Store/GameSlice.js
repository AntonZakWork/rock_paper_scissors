import { createSlice } from '@reduxjs/toolkit';
import { draw, lizard, lose, paper, rock, scissors, spock, win } from './Actions';

const initialState = {
  playerChoice: null,
  computerChoice: null,
  result: null,
  score: +localStorage.getItem('score') || 0,
  pause: true,
  rulesOpen: false,
  bonusMode: localStorage.getItem('bonusMode') === 'true' || false,
  gameChoises: [paper, scissors, rock],
  bonusModeChoises: [spock, scissors, paper, rock, lizard],
  isScoreFromStorage: true,
};
export const GameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    getChoice(state, action) {
      state.isScoreFromStorage = false;
      state.playerChoice = action.payload;
      const blessRng = Math.floor(Math.random() * 3);
      state.computerChoice = state.gameChoises[blessRng];
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
        localStorage.setItem('score', state.score);
      }
    },
    getChoiceBonusGame(state, action) {
      state.isScoreFromStorage = false;
      state.playerChoice = action.payload;
      const blessRng = Math.floor(Math.random() * 5);
      state.computerChoice = state.bonusModeChoises[blessRng];
      if (action.payload === state.computerChoice) {
        state.result = draw;
      } else {
        switch (action.payload) {
          default:
            return state;
          case scissors:
            state.computerChoice === rock || state.computerChoice === spock
              ? (state.result = lose)
              : (state.result = win);
            break;
          case paper:
            state.computerChoice === scissors || state.computerChoice === lizard
              ? (state.result = lose)
              : (state.result = win);
            break;
          case rock:
            state.computerChoice === paper || state.computerChoice === spock
              ? (state.result = lose)
              : (state.result = win);
            break;
          case spock:
            state.computerChoice === lizard || state.computerChoice === paper
              ? (state.result = lose)
              : (state.result = win);
            break;
          case lizard:
            state.computerChoice === scissors || state.computerChoice === rock
              ? (state.result = lose)
              : (state.result = win);
            break;
        }
      }
      if (state.result === win) {
        state.score += 1;
        localStorage.setItem('score', state.score);
      }
    },
    changePause(state) {
      state.pause = false;
    },
    toggleRules(state) {
      state.rulesOpen = !state.rulesOpen;
    },
    reset(state) {
      state.playerChoice = null;
      state.computerChoice = null;
      state.result = null;
      state.pause = true;
    },
    toggleBonusMode(state) {
      localStorage.clear();
      state.bonusMode = !state.bonusMode;
      state.score = 0;
    },
    setScoreFromStorage(state, action) {
      state.score = +action.payload;
    },
  },
});

export const {
  getChoice,
  reset,
  changePause,
  toggleRules,
  toggleBonusMode,
  getChoiceBonusGame,
  setScoreFromStorage,
} = GameSlice.actions;
export default GameSlice.reducer;
