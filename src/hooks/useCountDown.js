import { useEffect, useState } from 'react';
export default function useCountDown(date) {
  const dateEnd = new Date(date).getTime();
  const [countDown, setCountDown] = useState(dateEnd - new Date().getTime());

  const getReturnValue = (countDown) => {
    // calculate time left
    if (countDown < 0) return [0, 0, 0, 0];
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
    return [days, hours, minutes, seconds];
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(dateEnd - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [dateEnd]);
  return getReturnValue(countDown);
}
