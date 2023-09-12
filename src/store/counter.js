import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = {counter: 0, showState: true};

const counterSlice =createSlice({
    name:"counter",
    initialState:initialCounterState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action){
            state.counter = state.counter +action.payload;
        },
        toggleCounter(state){
            state.showState = !state.showState;
        }
    }
});
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;