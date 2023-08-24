// import packages below
import { configureStore } from '@reduxjs/toolkit';

// import reducers below
import clockReducer from '@/features/clock/clockSlice';

const store = configureStore({
  reducer: {
    counter: clockReducer,
  },
});

export default store;
