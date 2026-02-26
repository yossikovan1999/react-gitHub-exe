import { useEffect, useState } from "react";

function useTimer(time) {
  const [timeLeft, setTimeLeft] = useState(() => time * 60);
  const [humanTime, setHumanTime] = useState(() => `${time < 10 ? 0 : ""} ${time} : 00`,);
  const [stopTimer, setStopTimer] = useState(false);

  useEffect(() => {
    function getHumanTime() {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;

      return `${minutes < 10 ? 0 : ""} ${minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
    }

    if(!stopTimer){
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
      setHumanTime(() => getHumanTime());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft, stopTimer]);

  return { timeLeft, humanTime, setStopTimer };
}

export default useTimer;
