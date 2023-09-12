import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {counter: 0, showState: true};

const counterSlice =createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action){
            state.counter = state.counter +action.amount;
        },
        toggleCounter(state){
            state.showState = !state.showState;
        }
    }
});
const counterReducer = (state =initialState,action)=>{
    if(action.type ==="increment")
    {
        return {
            counter:state.counter +1,
            showState:state.showState
        };
    }
    if(action.type ==="increase")
    {
        return {
            counter:state.counter +action.amount,
            showState:state.showState
        };
    }
    if(action.type ==="decrement")
    {
        return {
            counter:state.counter -1,
            showState:state.showState
        };
    }
    if(action.type ==='toggle')
    {
        return {
            counter: state.counter,
            showState:!state.showState
        };
    }
    return state;
};

const store = createStore(counterReducer);

// const counterSubscriber = ()=>{
//     const state = store.getState();
//     console.log(state);
// };

// store.subscribe(counterSubscriber);
// store.dispatch({type: 'increment'});
// store.dispatch({type: 'decrement'});

export default store;