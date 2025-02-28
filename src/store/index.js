import { createStore } from redux;

const counterReducer = (state = { counter: 0 }, action) => {
  if (action === "increment") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }

  if (action === "decrement") {
    return {
        ...state,
        counter: state.counter - 1
    }
  }

  return state;
};

const store = createStore(counterReducer)

export default store;