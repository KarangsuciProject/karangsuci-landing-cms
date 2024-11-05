// example

import { createSlice } from '@reduxjs/toolkit';

import reducers from './exampleFeature.reducers';
import type { CounterState } from './exampleFeature.types';

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: reducers,
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const { reducer } = counterSlice;
