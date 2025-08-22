## What is setTimeout()
The **setTimeout() method**  of the Window interface sets a timer which executes a function or specified piece of code once the timer expires.
**Notes**
▫️ The setTimeout() is executed only once.
▫️If you need repeated executions, use setInterval() instead.
▫️Use the clearTimeout() method to prevent the function from starting.
### Syntax of 
```
setTimeout(function, delayInMilliseconds);
```
## Practically
```
setTimeout(() => {
  console.log("Hello after 3 seconds");
}, 3000)
```
**To clear a timeout, use the id returned from setTimeout():**
```
const timeoutId = setTimeout(() => console.log("Time's up!"), 3000);
clearTimeout(timeoutId); // Cancels the timeout
```

## Syntax of setInterval()
```
setInterval(function, delayInMilliseconds);
```
## Practically
```
setInterval(() => {
  console.log("Hello after 3 seconds");
}, 3000);
```
**To clear a Interval, use the id returned from setInterval():**
```
const intervalId = setInterval(() => console.log("Tick"), 1000);
clearInterval(intervalId); // Stops the interval
```
## setTimeout() vs setInterval()

| Feature         | `setTimeout()`                         | `setInterval()`                               |
| --------------- | -------------------------------------- | --------------------------------------------- |
| 🧠 What it does | Runs a function **once** after a delay | Runs a function **repeatedly** every interval |
| 🔁 Repeats?     | ❌ No (runs only once)                  | ✅ Yes (runs until manually stopped)           |
| 🔧 Can cancel?  | Yes — with `clearTimeout(id)`          | Yes — with `clearInterval(id)`                |


### ✅ Simple Concept about setTimeout use with reload():
setTimeout() normally runs only once.
But if that function reloads the page, the script starts again from the top.
That means setTimeout() runs again and again — because of the page reload, not because it's a loop.

So yes, it acts like setInterval() — but only because the page keeps reloading.

## 🧪 Simple Code Example
```
<!DOCTYPE html>
<html>
<head>
  <title>setTimeout with reload</title>
</head>
<body>
  <h2>Page will reload every 2 seconds</h2>

  <script>
    // This will run once after 2 seconds
    setTimeout(() => {
      location.reload();  // Reloads the page
    }, 2000);
  </script>
</body>
</html>
```
### ❗ But Remember:
🔹 setTimeout() is not looping
🔹 The page reload causes the code to start again
🔹 That’s why it feels like setInterval()

##  What is promise?

*  "I Promise a Result!"

**"Producing code" is code that can take some time**

**"Consuming code" is code that must wait for the result**

**A Promise is an Object that links Producing code and Consuming code**

**A promise is a special JavaScript object that links the “producing code” and the “consuming code” together.** In terms of our analogy: this is the “subscription list”. The “producing code” takes whatever time it needs to produce the promised result, and the “promise” makes that result available to all of the subscribed code when it’s ready.


### Promise Object Properties
A JavaScript Promise object can be:

1. Pending
2. Fulfilled
3. Rejected

The Promise object supports two properties: state and result.

1. While a Promise object is "pending" (working), the result is undefined.

2. When a Promise object is "fulfilled", the result is a value.

3. When a Promise object is "rejected", the result is an error object.