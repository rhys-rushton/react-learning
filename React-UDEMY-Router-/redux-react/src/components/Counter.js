import classes from './Counter.module.css';
import { useSelector, connect } from 'react-redux';

const Counter = () => {
  
  // Access data managed in our store.
  // by using useSelector redux automatically sets up a connection to 
  // the redux store in this component.
  const counter = useSelector( (state) => {
    
    return state.counter;
  
  });
  
  
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button>Increment</button>
        <button>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
