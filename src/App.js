import { useState, useEffect } from "react";
import inputToSeconds from "./inputToSeconds";
import DisplayCounter from "./components/DisplayCounter";
import InputForm from "./components/InputForm";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  const [inputHours, setInputHours] = useState("");
  const [inputMinutes, setInputMinutes] = useState("");
  const [inputSeconds, setInputSeconds] = useState("");

  const [isReset, setIsReset] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const [isDisabled, setIsDisabled] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleChangeHours = (e) => {
    setInputHours(e.target.value);
  };
  const handleChangeMinutes = (e) => {
    setInputMinutes(e.target.value);
  };
  const handleChangeSeconds = (e) => {
    setInputSeconds(e.target.value);
  };

  const handleSubmit = (e) => {
    setIsReset(false);
    setIsPaused(false);
    setIsDisabled(true);
    setCounter(inputToSeconds(inputHours, inputMinutes, inputSeconds));
    setInputHours("");
    setInputMinutes("");
    setInputSeconds("");
  };

  const handlePause = () => {
    setIsDisabled(false);
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsDisabled(false);
    setIsReset(true);
  };

  useEffect(() => {
    console.log("isReset=" + isReset);
    if (counter > 0 && !isReset && !isPaused) {
      setTimeout(() => {
        setCounter(counter - 1);
        console.log(counter);
      }, 1000);
    }
  }, [counter, isReset, isPaused]);

  useEffect(() => {
    if (isReset) {
      setCounter(0);
    }
  }, [isReset, counter]);

  return (
    <div>
      <Header headerText="Countdown Timer" />
      <InputForm
        text="Hours"
        value={inputHours}
        handleChange={handleChangeHours}
      />
      <InputForm
        text="Minutes"
        value={inputMinutes}
        handleChange={handleChangeMinutes}
      />
      <InputForm
        text="Seconds"
        value={inputSeconds}
        handleChange={handleChangeSeconds}
      />

      <Button
        btnText="Submit"
        handleBtn={handleSubmit}
        isDisabled={isDisabled}
      />
      <DisplayCounter counter={counter} />
      <Button
        btnText="Pause/Countinue"
        handleBtn={handlePause}
        color={{ backgroundColor: "#d79935", color: "white" }}
      />
      <Button
        btnText="Reset"
        handleBtn={() => handleReset()}
        color={{ backgroundColor: "#cb5757", color: "white" }}
      />
    </div>
  );
}

export default App;
