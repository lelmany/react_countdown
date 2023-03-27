import "../styles/DisplayCounter.css";
import secondsToTime from "../secondsToTime";

const DisplayCounter = ({ counter }) => {
  let [hours, minutes, seconds] = [...secondsToTime(counter)];

  return (
    <>
      <div className="displayContainer">
        <p className="counterText">{[...hours.toString()][0]}</p>
        <p className="counterText">{[...hours.toString()][1]}</p>

        <p className="counterSeparator">:</p>

        <p className="counterText">{[...minutes.toString()][0]}</p>
        <p className="counterText">{[...minutes.toString()][1]}</p>

        <p className="counterSeparator">:</p>

        <p className="counterText">{[...seconds.toString()][0]}</p>
        <p className="counterText">{[...seconds.toString()][1]}</p>
      </div>
    </>
  );
};
export default DisplayCounter;
