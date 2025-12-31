import React from "react";
import { useState } from "react";

export default function TimerSettings({
  durationTime,
  setDurationTime,
  setTimeSettings,
  setTime,
}: {
  durationTime: number;
  setDurationTime: React.Dispatch<React.SetStateAction<number>>;
  setTimeSettings: React.Dispatch<React.SetStateAction<boolean>>;
  setTime: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [timerSettings, setTimerSettings] = useState(formatTime(durationTime));

  function formatTime(durationTime: number) {
    const minutes = Math.floor(durationTime / 60);
    const seconds = durationTime % 60;
    return { minutes: minutes, seconds: seconds };
  }

  function handleMinutesInput(event: React.ChangeEvent<HTMLInputElement>) {
    const minutes = Number(event.target.value);
    const seconds = timerSettings.seconds;
    setTimerSettings({ minutes: minutes, seconds: seconds });
  }

  function handleSecondsInput(event: React.ChangeEvent<HTMLInputElement>) {
    const seconds = Number(event.target.value);
    const minutes = timerSettings.minutes;
    setTimerSettings({ minutes: minutes, seconds: seconds });
  }

  function handleSave() {
    const totalSeconds = timerSettings.minutes * 60 + timerSettings.seconds;
    setDurationTime(totalSeconds);
    setTime(totalSeconds);
    setTimeSettings(false);
  }

  return (
    <p>
      <span>
        <input
          type="number"
          className="timeInput"
          min="0"
          max="99"
          value={timerSettings.minutes}
          onChange={(event) => handleMinutesInput(event)}
        />
        :
        <input
          type="number"
          className="timeInput"
          min="0"
          max="59"
          value={timerSettings.seconds}
          onChange={(event) => handleSecondsInput(event)}
        />
      </span>
      <button onClick={handleSave}>SAVE</button>
    </p>
  );
}
