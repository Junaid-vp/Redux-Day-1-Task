import { createStore } from 'redux'

const InitalValue = {
  count: 0,
  noOfpeople: 10,
};

const reducer = (state = InitalValue, action) => {
  switch (action.type) {
    case "Increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "Decrement":
      return {
        ...state,
        count: state.count - 1,    
      };
      case "INCREASE":
      return {
        ...state,
        noOfpeople: state.noOfpeople + 1,    
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

console.log("InitalValue", store.getState());

store.subscribe(() => console.log("UpdatedState", store.getState()));

store.dispatch({ type: "INCREASE" });
store.dispatch({ type: "Increment" });
store.dispatch({ type: "Increment" });
store.dispatch({ type: "Decrement" });
store.dispatch({ type: "Increment" });

store.dispatch({ type: "INCREASE" });