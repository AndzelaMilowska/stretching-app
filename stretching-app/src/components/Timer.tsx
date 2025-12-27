import React from "react";

import { useState, useEffect } from "react";
import TimerControls from "./TimerControls";
import { exercises } from "../assets/exercises";
import longBeepSound from "../assets/correct-beep_C_major.wav"
import shortBeepSound from "../assets/correct-soft-beep_C_major.wav"


export default function Timer({
  durationTime,
  setIndexOfExercise,
}: {
  durationTime: number;
  setIndexOfExercise: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [time, setTime] = useState(durationTime);
  const [isRunning, setIsRunning] = useState(false);


  const shortBeep = new Audio(shortBeepSound);
  const longBeep = new Audio(longBeepSound);

  function resetTimer() {
    setTime(durationTime);
  }

    function handleNext() {
    resetTimer();
    setIndexOfExercise((prev) => (prev < exercises.length - 1 ? prev + 1 : prev ));
  }

  function formatTime() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }


  
  useEffect(() => {
    let interval: number | undefined;
    //if time === 0 and exercises length === current exercise +1 -> STOP, GJ 
    if (time === 0) {
      longBeep.play();
      handleNext()
    }
    if (time > 0 && time <= 3 && isRunning) {
      shortBeep.play();
    }
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (!isRunning || time === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [time, isRunning]);

  return (
    <div>
      <span>{formatTime()}</span>
      <TimerControls
        resetTimer={resetTimer}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        setIndexOfExercise={setIndexOfExercise}
        handleNext={handleNext}
      />
    </div>
  );
}
