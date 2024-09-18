import React, { useState, useEffect } from "react";

import "./CounterSection.scss";

const calculateTimeLeft = () => {
  const endTime = new Date("2025-08-09T23:59:59");
  const now = new Date();
  const difference = endTime - now;

  if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  const seconds = Math.floor((difference / 1000) % 60);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds };
};

const CounterSection = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="counter-section">
      <h3>I'm waiting for you</h3>
      <div className="counter-section-divs">
        <div className="counter-section-divs-day">
          {timeLeft.days}
          <br />
          <span>Day</span>
        </div>
        <div className="counter-section-divs-houers">
          {timeLeft.hours}
          <br />
          <span>hour</span>
        </div>
        <div className="counter-section-divs-mitutes">
          {timeLeft.minutes}
          <br />
          <span>minute</span>
        </div>
        <div className="counter-section-divs-seconds">
          {timeLeft.seconds}
          <br />
          <span>seconds</span>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
