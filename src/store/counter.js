import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++; // In reducerFunction implementation(without toolkit), this can cause issue but
    }, // here it will clone it and override the state like we doing from our side
    decrement(state) {
      // redux toolkit has the inbuilt package for it
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;

/*
Here the redux state is immutable because react only render the component if the state value changes, so we have take
it in a newState so react knows that there are 2 states and one of them got updated
*/
