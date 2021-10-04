import reducer from "./reducer";

function createStore(reducer) {
  let state;
  let subscribers = [];

  function subscribe(subber) {
    subscribers.push(subber);
  }

  function dispatch(action) {
    //call the reducer
    state = reducer(state, action);
    // to notify all subscribers
    for (let i = 0; i < subscribers.length; i++) {
      subscribers[i]();
    }
  }
  function getState() {
    return state;
  }
  return {
    subscribe,
    dispatch,
    getState,
  };
}

export default createStore(reducer);
