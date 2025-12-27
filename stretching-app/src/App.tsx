import "./App.css";
import { useState } from "react";
import Timer from "./components/Timer";
import { exercises } from "./assets/exercises";
function App() {
  const [indexOfExercise, setIndexOfExercise] = useState(0);
  
  return (
    <>

      <h1>Stretching App</h1>

  <p>{indexOfExercise+1} / {exercises.length}</p>
<p>{exercises[indexOfExercise].leg}</p>

<img src={exercises[indexOfExercise].exercise} alt="Exercise" className="exerciseImg"/>
      <Timer
        durationTime={45}
        setIndexOfExercise={setIndexOfExercise}
      />
    
    </>
  );
}

export default App;




