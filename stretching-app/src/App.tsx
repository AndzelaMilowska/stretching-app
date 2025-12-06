import "./App.css";
import { useState } from "react";

function App() {
  return (
    <>
      <Timer durationTime={{ minutes: 0, seconds: 45 }} />
    </>
  );
}

export default App;

interface DurationTime {
  minutes: number;
  seconds: number;
}

function Timer({ durationTime }: { durationTime: DurationTime }) {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState({ minutes: durationTime.minutes, seconds: durationTime.seconds });

  function resetTimer () {
setTime({ minutes: durationTime.minutes, seconds: durationTime.seconds })
  }
  return (
    <div>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={resetTimer}>Reset</button>
      <button>Next</button>
      <button>Previous</button>

      <span>
        {time.minutes}:{time.seconds}
      </span>
    </div>
  );
}
