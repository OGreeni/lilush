import { useState, useMemo } from 'react';

class EventEmitter extends EventTarget {
  emit(key: string) {
    this.dispatchEvent(new Event(key));
  }
}

interface Config {
  persist: boolean;
}

type StoreValues =
  | string
  | number
  | boolean
  | { [key: string]: unknown }
  | unknown[];

export const createStore = <T extends Record<string, StoreValues>>(
  initialState: T,
  config?: Config
) => {
  const instance = new EventEmitter();

  if (config?.persist) {
    const keys = Object.keys(initialState);
    keys.forEach((key) => {
      if (sessionStorage.getItem(key)) {
        let value: any = JSON.parse(sessionStorage.getItem(key)!);
        if (typeof initialState[key] === 'number') {
          value = parseInt(value as string);
        } else if (typeof initialState[key] === 'boolean') {
          value = value === 'true';
        }
        if (key && value) {
          initialState[key as keyof T] = value as T[keyof T];
        }
      }
    });
  }

  return <U extends keyof T & string>(
    key: U
  ): [T[U], (cb: (prevState: T[U]) => T[U]) => void] => {
    const [, setCount] = useState(0);

    useMemo(() => {
      instance.addEventListener(key, () => {
        setCount((c) => (c + 1) % 999999);
      });
    }, [key]);

    return [
      initialState[key],
      (cb: (prevState: T[U]) => T[U]) => {
        initialState[key] = cb(initialState[key]);

        if (config?.persist) {
          sessionStorage.setItem(key, JSON.stringify(initialState[key]));
        }

        instance.emit(key);
      },
    ];
  };
};
