import { react, useRef, useEffect } from 'react';

export default function useMounted() {
  const componentIsMounted = useRef(true);
  useEffect(
    () => () => {
      componentIsMounted.current = false;
    },
    [],
  );
  return componentIsMounted;
}
