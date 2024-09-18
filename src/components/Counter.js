import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch(); // useDispatch we used to dispatch our action on the store

  const toggleCounterHandler = () => {
    // dispatch({type: 'toggle'});
    dispatch(counterActions.toggle());
  };
  const incrementHandler = () => {
    // dispatch({type: 'increment'});
    dispatch(counterActions.increment());
  };
  const increaseHandler = () => {
    //  dispatch({type: 'increase', amount: 5});
    dispatch(counterActions.increase(5)); // Here it will be always be inside payload, if we passed it as an object then it will
  }; // be payload.(property of an object)
  const decrementHandler = () => {
    // dispatch({type: 'decrement'});
    dispatch(counterActions.decrement());
  };
  const showCounter = useSelector((state) => state.counter.showCounter);
  const counter = useSelector((state) => state.counter.counter); // It is used to subscribe with the store and we always

  return (
    // latest value from the store
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increaseHandler}>Increase By 5</button>
      <button onClick={decrementHandler}>Decrement</button>
      <div>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </div>
    </main>
  );
};

export default Counter;
