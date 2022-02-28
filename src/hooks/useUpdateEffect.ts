import { useEffect, useRef } from 'react';

export const useUpdateEffect: typeof useEffect = (effect, deps) => {
  const isFirst = useRef(true);

  if (isFirst.current) {
    isFirst.current = false;
  }

  useEffect(() => {
    if (!isFirst.current) {
      return effect();
    }
  }, deps);
};
