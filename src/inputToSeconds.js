function inputToSeconds(hours, minutes, seconds) {
  let h = hours * 60 * 60;
  let m = minutes * 60;
  let s = seconds * 1;
  return h + m + s;
}

export default inputToSeconds;
