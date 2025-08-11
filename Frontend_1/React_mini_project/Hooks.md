## what is hooks
Hooks are special functions in React that let you use state and other React features inside functional components without writing a class.

Common Hooks
useState → For storing and updating state.

useEffect → For side effects (API calls, timers, event listeners).

useContext → For using context values.

useRef → For referencing DOM elements or persisting values between renders without causing re-render.

useReducer → For more complex state logic.

Custom Hooks → Your own hook functions.
## Why react ?
It's because those are normal variables and React.js doesn't know that it's going to be changed.
And that react should respond or update DOM based on that.
- Those values are already rendered on DOM, there is no way they will be re-rendered.
- For that React.js provides a function called "useState"
- This type of function which starts with "use" is called hook.
- This is a special function which has some features provided by react.js
we will learn about other hooks in future.

## syntax of useState
```
const[count,setCount]=useState(0)
```
## what is state
**In React, state refers to an object that holds data or information about the component. State is managed within the component (just like variables declared in a function).**  However, unlike regular variables, when state changes, React re-renders the component to reflect these changes, keeping the user interface in sync with the data.
State is dynamic and mutable, meaning it can change over tin in response to user actions, server responses, or other even