import { combineReducers, createStore } from "redux";

const InitalValueOfCounterOne = {
  counterOne: 0,
};
const InitalValueOfCounterTwo = {
  counterTwo: 0,
};

const countOneReducer = (state = InitalValueOfCounterOne, action) => {
  switch (action.type) {
    case "INRCREMENTCOUNTERONE":
      return {
        ...state,
        counterOne: state.counterOne + 1,
      };
    case "DECRIMENTCOUNTERONE":
      return {
        ...state,
        counterOne: state.counterOne - 1,
      };

    default:
      return state;
  }
};
const countTwoReducer = (state = InitalValueOfCounterTwo, action) => {
  switch (action.type) {
    case "INRCREMENTCOUNTERTWO":
      return {
        ...state,
        counterTwo: state.counterTwo + 1,
      };
    case "DECRIMENTCOUNTERTWO":
      return {
        ...state,
        counterTwo: state.counterTwo - 1,
      };

    default:
      return state;
  }
};

const reducerRoot = combineReducers({
  counter1: countOneReducer,
  counter2: countTwoReducer,
});

const state = createStore(reducerRoot);

console.log("InitialValue", state.getState());

state.subscribe(() => console.log("Updated Value", state.getState()));

state.dispatch({ type: "INRCREMENTCOUNTERONE" });
state.dispatch({ type: "INRCREMENTCOUNTERONE" });
state.dispatch({ type: "DECRIMENTCOUNTERONE" });

state.dispatch({ type: "INRCREMENTCOUNTERTWO" });
state.dispatch({ type: "INRCREMENTCOUNTERTWO" });
state.dispatch({ type: "DECRIMENTCOUNTERTWO" });
state.dispatch({ type: "DECRIMENTCOUNTERTWO" });
