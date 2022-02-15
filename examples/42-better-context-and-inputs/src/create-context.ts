import * as React from 'react';

// A abstract createContext generic function extends object or can be null
// trade off is education of team how to use.
// Note: Steve is using 2nd method which is using as keyword
export function createContext<A extends {} | null>() {
  const context = React.createContext<A | undefined>(undefined);

  const useContext = () => {
    const c = React.useContext(context);
    if (c === undefined)
      throw new Error('useContext must be inside a Provider with a value');
    return c;
  };
  return [useContext, context.Provider] as const; // const make this array read only, with means u can not push any more item to array or remove any item from the array
}
