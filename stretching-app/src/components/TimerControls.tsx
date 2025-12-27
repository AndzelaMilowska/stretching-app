import React from "react";

export default function TimerControls({
  handleNext,
  resetTimer,
  isRunning,
  setIsRunning,
  setIndexOfExercise,
}: {
  handleNext: () => void;
  resetTimer: () => void;
  isRunning: boolean;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  setIndexOfExercise: React.Dispatch<React.SetStateAction<number>>;
}) {
  function handleReset() {
    resetTimer();
  }



  function handlePrevious() {
    resetTimer();
    setIndexOfExercise((prev) => (prev > 0 ? prev - 1 : prev));
  }

  return (
    <div>
      <button onClick={handleNext}>Next</button>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={() => setIsRunning(!isRunning)}>{isRunning ? "Pause" : "Start"}</button>
    </div>
  );
}
