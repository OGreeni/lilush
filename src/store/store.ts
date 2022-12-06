import { createStore } from '../hooks/useStore';

export const useStore = createStore(
  // define the initial state object
  {
    name: 'John',
    age: 0,
    employed: true,
  },
  { persist: true } // setting persist to true saves the state data to SessionStorage to survive page refresh
);
