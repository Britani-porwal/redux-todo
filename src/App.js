import Todo from './Components/Todo';

function App() {

  return (
    <Todo />
  );
}

export default App;

// Redux Tutorial From Scratch
// PROS : 
// React is useful in state managemnet
// In recat props can not be passed between sibling components 
// Redux comes in handy here 

// CONS :
// Redux requires a lot of boilerplate code 

// Steps :
// 1. npx create-react-app 
// 2. npm install redux react-redux @reduxjs/toolkit (3 libraries)

// Redux serves as a centralised store 
// In redux states can only be updated in a predictable fashion 
// states are updated immutably  

// ACTION
// Plain JavaScript objects , action has a type field

// ACTION CREATOR
// Pure function used to create action 
// const incNumber = (num) => {
//   return {
//     type : 'INCREMENT',
//     payload : num
//   }
// }

// REDUCER 
// Reducer is a function , it takes curent state & action as agruments 
// it returns a new state 
// const changeNumber = (state , action) => {
//     switch(action.type){
//       case "INCREMENT" : return state + action.payload;
//       case "DECREMENT" : return state - 1;
//       default :  return state ;
//     }
// }

// STORE
// Redux store brings together state , action and reducers 
// A redux application has a SINGLE store
// Every Redux store has a single root reducer function
// import {createStore} from "redux"; (configureStore in redux toolkit)
// const storeName = createStore(rootReducers)


// REDUX PRINCIPLES
// 1. Single Source of truth : global state of application is stored as an object inside single store 
// 2. State is read only : only way to change a state is to dispatch an action
// 3. Immutability , One way data flow 
// 4. Changes are made with pure functions  , i.e reducers

// REDUX_THUNK
// 1.For defining async action creators 



// Git : Version Control System 
// 1. easy file recovery
// 2. Who introduced any issue & when was the issue raised 
// 3. Rollback to previous version of file is possible 


// REDUX-TOOLKIT
