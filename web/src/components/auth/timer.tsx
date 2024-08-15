// 이메일 전송 후 5분에서 점점 줄어드는 타이머

import { useState, useEffect } from 'react';

interface TimerProps {
  initialTime: number;
  onTimerEnd: () => void;
}
const Timer = ({ initialTime, onTimerEnd }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimerEnd();
      return;
    }

    const timerInterval = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [timeLeft, onTimerEnd]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
  };

  return <div>{formatTime(timeLeft)}</div>;
};

export default Timer;
