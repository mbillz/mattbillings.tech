import { useState, useEffect } from 'react';

const useIsReady = delay => {
  const [isReady, setIsReady] = useState(false);
  const init = () => setIsReady(true);

  useEffect(() => {
    setTimeout(init, delay);
    return () => {
      clearTimeout(init);
    };
  });

  return isReady;
};

export default useIsReady;
