import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
const Counter = () => {
  const counter =useSelector((state) =>{
    return state.counter;
  });
  const showState =useSelector((state) =>{
    return state.showState;
  });
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'});
  };

  const incrementHandler = ()=>{
    dispatch({type: 'increment'});
  };
  const increasetHandler = ()=>{
    dispatch({type: 'increase',amount:5});
  };
  const decrementHandler = ()=>{
    dispatch({type: 'decrement'});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showState&&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increasetHandler}>Increase By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
