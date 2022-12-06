# Lilush

A minimal, zero-dependency, TypeScript-first state manager for React

## Get Started With Lilush

### Creating a Store

```ts
import { createStore } from '../hooks/useStore';

export const useStore = createStore(
  // Define the initial state object
  {
    name: 'John',
    age: 0,
    employed: true,
  },
  { persist: true } // Optional configuration object. Setting persist to true saves the state data to SessionStorage to survive page reload
);
```

### Using the `useStore` Hook

```ts
import { useStore } from './store/store';

export default function Button() {
  const [age, setAge] = useStore('age'); // Completely type-safe

  return (
    // Receive the previous state snapshot and update the state accordingly
    <button onClick={setAge((prevAge) => prevAge + 1)}>
      Current Age: {age}
    </button>
  );
}
```

Once the state changes, all components subscribed to that state will update.
