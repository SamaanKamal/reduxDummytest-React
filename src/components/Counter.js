import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';

const Counter = () => {
  const counter =useSelector((state) =>{
    return state.counter.counter;
  });
  const showState =useSelector((state) =>{
    return state.counter.showState;
  });
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const incrementHandler = ()=>{
    dispatch(counterActions.increment());
  };
  const increaseHandler = ()=>{
    dispatch(counterActions.increase(5));
  };
  const decrementHandler = ()=>{
    dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showState&&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
