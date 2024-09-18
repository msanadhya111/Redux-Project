import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer }, // We need to have mandatory one reducer function
});

/*
As earlier we are taking into the arg in actions and through dispatch it was coming in redux toolkit it was inbuilt
that it becomes an action so we do have to takes the type here just directly call this function
*/

export default store;

/*
Here, it's not a problem but in bigger application to keep all the code at one places become tough to handle
So we keep the slice(reducerFunction part in a separate separate file)
*/

/*
const reducerFunction = (state = { counter: 0, showCounter: true }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,  // Here when we return the state we always override it so if forgot
            showCounter: state.showCounter // to pass like showCounter it will become 0 in the component
        }
    }
    if (action.type === 'increase') {
        return {
            counter: state.counter + action.amount, // Always return your state by overriding it 
            showCounter: state.showCounter     // Never ever mutate(change) the state like state.counter++
        }                                      // It will give unexpected behaviour and tough to debug as well
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }
    if (action.type === "toggle") {
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }
    return {
        counter: state.counter,
        showCounter: state.showCounter
    } 
}
*/
