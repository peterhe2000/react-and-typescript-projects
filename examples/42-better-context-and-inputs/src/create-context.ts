import * as React from 'react';

// A generic extends object or can be null
export function createContext<A extends {} | null>() {
  const ctx = React.createContext<A | undefined>(undefined);

  const useContext = () => {
    const c = React.useContext(ctx);
    if (c === undefined)
      throw new Error('useContext must be inside a Provider with a value');
    return c;
  };
  return [useContext, ctx.Provider] as const; // as const make this array read only, with means u can not push any more item to array or remove any item from the array
}
