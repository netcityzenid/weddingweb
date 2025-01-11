// src/components/CountdownTimer.tsx
"use client"; // untuk mendukung penggunaan useEffect

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: string; // Format tanggal dalam string, misalnya: "2024-12-31T00:00:00"
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="countdown-timer flex justify-center text-center mx-auto opacity-65 font-sans ">
      <div className="  text-[#0a0a0a] items-center justify-center text-center px-4 block py-   rounded-xl">
        <div className="bg-red-">
          <span className="items-start text-3xl flex font-semibold text-center justify-center     text-[#0a0a0a]">{timeLeft.days}</span>
          <span className="text-sm items-center bg-green- flex justify-center">Hari</span>
        </div>
      </div>
      <div className="  text-[#0a0a0a] items-center justify-center text-center px-4 block py-   rounded-xl">
        <div className="bg-red-">
          <span className="items-start text-3xl flex font-semibold text-center justify-center     text-[#0a0a0a]">{timeLeft.hours}</span>
          <span className="text-sm items-center bg-green- flex justify-center">Jam</span>
        </div>
      </div>
      <div className="  text-[#0a0a0a] items-center justify-center text-center px-4 block py-   rounded-xl">
        <div className="bg-red-">
          <span className="items-start text-3xl flex font-semibold text-center justify-center     text-[#0a0a0a]">{timeLeft.minutes}</span>
          <span className="text-sm items-center bg-green- flex justify-center">Menit</span>
        </div>
      </div>
      <div className="  text-[#0a0a0a] items-center justify-center text-center px-4 block py-   rounded-xl">
        <div className="bg-red-">
          <span className="items-start text-3xl flex font-semibold text-center justify-center     text-[#0a0a0a]">{timeLeft.seconds}</span>
          <span className="text-sm items-center bg-green- flex justify-center">Detik</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
