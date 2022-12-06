# Lilush

A minimal, zero-dependency, TypeScript-first state manager for React

## Getting Started With Lilush

### Installing Lilush
Install Lilush with your favorite package manager.

#### npm
`npm install lilush`

#### yarn
`yarn add lilush`

#### pnpm
`pnpm add lilush`

### Creating a Store

```ts
import { createStore } from 'lilush';

export const useStore = createStore(
  // Create the initial state object
  {
    name: 'John',
    age: 24,
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

### Live Example

https://ogreeni.github.io/lilush/
