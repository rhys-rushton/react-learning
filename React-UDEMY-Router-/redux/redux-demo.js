const redux = require('redux');


// Receives two parameters
// Old State + Dispatched Action
// Must return a certain output => New State Object.
// Should be a pure function -> Same input leads to same output.
// No side effects -> no editing other objects inside of function.
const counterReducer = (state = {counter: 0}, action) => {
    
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1, 
        }
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1, 
        }
    }
    
    return state;
}


// Create Redux store
// we pass counterReducer to createStore, because the store needs to know
// which reducer is responsible for changing that store.
const store = redux.createStore(counterReducer);

//Store subscriber
// Will give us the latest state snapshot after the store is updated.
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState)
}

store.subscribe(counterSubscriber);
store.dispatch({type:'increment'});
store.dispatch({type:'decrement'});