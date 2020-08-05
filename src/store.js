import { createStore } from "redux";
import { connect } from "react-redux";

const initialState = {
  starLine: 0,
  endLine: 0,
  step: 10,
};

function reducer(state, action) {
  if (action.type === "CHANGE_FIELD") {
    return {
      ...state,
      [action.key]: action.value,
    };
  }

  return state;
}

export const store = createStore(reducer, initialState);

store.subscribe(() => {
  console.log(store.getState());
});
