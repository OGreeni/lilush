import React from 'react';
import { useStore } from '../store/store';

export default function Button() {
  const [age, setAge] = useStore('age');

  return (
    <button onClick={() => setAge((prevAge) => prevAge + 1)} className="button">
      Age: {age}
    </button>
  );
}
