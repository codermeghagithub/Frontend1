// setTimeout
setTimeout(() => {
  console.log("Hello after 3 seconds");
}, 3000)

// stop setTimeout
const timeoutId = setTimeout(() => console.log("Time's up!"), 3000);
clearTimeout(timeoutId); // Cancels the timeout

// setInterval

setInterval(() => {
  console.log("Hello after 3 seconds");
}, 3000)

// const intervalId = setInterval(() => console.log("Tick"), 1000);
// clearInterval(intervalId); // Stops the interval