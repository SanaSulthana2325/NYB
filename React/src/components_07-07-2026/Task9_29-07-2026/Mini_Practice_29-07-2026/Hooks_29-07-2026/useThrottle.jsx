import { useState, useEffect, useRef } from 'react';

function useThrottle(value, delay) {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastExecuted = useRef(Date.now());

  useEffect(() => {
    const now = Date.now();

    if (now - lastExecuted.current >= delay) {
      setThrottledValue(value);
      lastExecuted.current = now;
    } else {
      const timer = setTimeout(() => {
        setThrottledValue(value);
        lastExecuted.current = Date.now();
      }, delay - (now - lastExecuted.current));

      return () => clearTimeout(timer);
    }
  }, [value, delay]);

  return throttledValue;
}

export default useThrottle;