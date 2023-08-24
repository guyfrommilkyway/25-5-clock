// import packages below
import { createSlice } from '@reduxjs/toolkit';

// import helpers below
import { cleanTime, getNowTime, getEndTime, getDiffTime } from '@/helpers';

// constant variables
const initialState = {
  isPlaying: false,
  isSessionEnded: false,
  timer: '25:00',
  endTime: 0,
  remainingTime: 0,
  sessionLength: 25,
  breakLength: 5,
};

const clockSlice = createSlice({
  name: 'clock',
  initialState,
  reducers: {
    start: (state) => {
      state.isPlaying = true;

      const end = getEndTime(state.sessionLength, state.remainingTime);

      state.endTime = end;
      state.remainingTime = end - getNowTime();
    },
    pause: (state) => {
      state.isPlaying = false;
      state.remainingTime = getDiffTime(state.endTime);
    },
    update: (state, action) => {
      switch (action.payload.type) {
        case 'SET_TIMER':
          state.timer = action.payload.data;
          break;
        case 'SESSION_ENDED':
          state.isSessionEnded = true;
          state.endTime = 0;
          state.remainingTime = 0;
          break;
        case 'BREAK_ENDED':
          state.endTime = 0;
          state.remainingTime = 0;
          break;
        default:
          break;
      }
    },
    stop: (state) => {
      state.isPlaying = false;
      state.isSessionEnded = false;
      state.timer = '25:00';
      state.endTime = 0;
      state.remainingTime = 0;
      state.sessionLength = 25;
      state.breakLength = 5;
    },
    increment: (state, action) => {
      if (state.isPlaying) return;

      switch (action.payload.type) {
        case 'BREAK_LENGTH':
          state.breakLength < 60 && state.breakLength++;
          state.endTime = 0;
          state.remainingTime = 0;
          break;
        case 'SESSION_LENGTH':
          state.sessionLength < 60 && state.sessionLength++;
          state.timer = `${cleanTime(state.sessionLength)}:00`;
          state.endTime = 0;
          state.remainingTime = 0;
          break;
        default:
          break;
      }
    },
    decrement: (state, action) => {
      if (state.isPlaying) return;

      switch (action.payload.type) {
        case 'BREAK_LENGTH':
          state.breakLength > 1 && state.breakLength--;
          state.endTime = 0;
          state.remainingTime = 0;
          break;
        case 'SESSION_LENGTH':
          state.sessionLength > 1 && state.sessionLength--;
          state.timer = `${cleanTime(state.sessionLength)}:00`;
          state.endTime = 0;
          state.remainingTime = 0;
          break;
        default:
          break;
      }
    },
  },
});

export const { start, pause, update, stop, increment, decrement } =
  clockSlice.actions;

export default clockSlice.reducer;
