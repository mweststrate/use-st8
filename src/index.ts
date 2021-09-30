import { useMemo, useState } from "react";

export type St8<V> = {
  (): V;
  (newValue: V | ((current: V) => V)): void;
};

export function useSt8<V>(initialValue: (() => V) | V): St8<V> {
  const [state, setState] = useState(initialValue);
  return useMemo(() => {
    return function st8() {
      switch (arguments.length) {
        case 0:
          return state;
        case 1:
          return void setState(arguments[0]);
        default:
          throw new Error("Expected 0 or 1 arguments");
      }
    } as St8<V>;
  }, [state]);
}
