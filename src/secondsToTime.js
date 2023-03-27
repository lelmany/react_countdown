function secondsToTime(counter) {
  let hours = Math.floor(counter / 3600);
  let minutes = Math.floor((counter % 3600) / 60);
  let seconds = Math.floor(counter % 60);

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return [hours, minutes, seconds];
}

export default secondsToTime;
