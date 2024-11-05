import type { PayloadAction } from '@reduxjs/toolkit';

import type { CounterState } from './exampleFeature.types';

export default {
  increment: (state: CounterState) => {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    state.value += 1;
  },
  decrement: (state: CounterState) => {
    state.value -= 1;
  },
  incrementByAmount: (state: CounterState, action: PayloadAction<number>) => {
    state.value += action.payload;
  },
};
