// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';
// const counterReducer = (state =initialState,action)=>{
//     if(action.type ==="increment")
//     {
//         return {
//             counter:state.counter +1,
//             showState:state.showState
//         };
//     }
//     if(action.type ==="increase")
//     {
//         return {
//             counter:state.counter +action.amount,
//             showState:state.showState
//         };
//     }
//     if(action.type ==="decrement")
//     {
//         return {
//             counter:state.counter -1,
//             showState:state.showState
//         };
//     }
//     if(action.type ==='toggle')
//     {
//         return {
//             counter: state.counter,
//             showState:!state.showState
//         };
//     }
//     return state;
// };

// const store = createStore(counterReducer);
const store = configureStore({
    reducer:{
        counter:counterReducer,
        auth:authReducer
    }
    // reducer:{
    //     counter: counterSlice.reducer
    // } // multople Slices
});


// const counterSubscriber = ()=>{
//     const state = store.getState();
//     console.log(state);
// };

// store.subscribe(counterSubscriber);
// store.dispatch({type: 'increment'});
// store.dispatch({type: 'decrement'});

export default store;