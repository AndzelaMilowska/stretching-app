import React from "react";
import { useState } from "react";

export default function TimerSettings({durationTime, setDurationTime}: {
    durationTime: number;
    setDurationTime: React.Dispatch<React.SetStateAction<number>>;
}  ) {

    const [timerSettings, setTimerSettings] = useState(formatTime(durationTime));

  function formatTime(durationTime: number) {
    const minutes = Math.floor(durationTime / 60);
    const seconds = durationTime % 60;
    return {minutes: minutes, seconds: seconds};
  }

   function handleSettingsChange( event: React.ChangeEvent<HTMLInputElement>) {


   }
   
  return (
    <span>
      <input type="number" className="timeInput" min="0" max="99" value={timerSettings.minutes} 
      onChange={event => handleSettingsChange(event)}/> 
      :
      <input type="number" className="timeInput" min="0" max="99" value={timerSettings.seconds} />
    </span>
  );
}
