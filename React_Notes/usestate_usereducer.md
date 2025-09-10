## Hooks

Why use 

##  how do i understand in which project i have to use usereducer

🔹 Use useState when:

Your state is simple (just a number, boolean, or a few values).

State changes are independent (they don’t depend much on each other).

Update logic is straightforward (setCount(count+1), setIsOpen(true)).

Example projects:

Counter app

Show/hide modal

Input form with just 1–2 fields

👉 Rule of thumb: If you only need 1–3 useStates, it’s fine.

🔹 Use useReducer when:

You have complex state logic (like conditions, multiple ways of updating state).

State has multiple properties that belong together (e.g., an object).

Updates are triggered by specific actions (like "add_item", "remove_item").

Multiple useStates would get messy and hard to manage.

Example projects:

Todo app (add, delete, toggle complete)

Shopping cart (add item, remove item, update quantity)

Multi-step form (go next, go back, reset form)

Authentication flow (login, logout, loading, error states)

👉 Rule of thumb: If you need more than 3–4 related states, or if state updates depend on action type, use useReducer.


### ⚡ Example Comparison:

✅ **Todo App with useState (messy)**
```js
const [todos, setTodos] = useState([]);
const [filter, setFilter] = useState("all");
const [loading, setLoading] = useState(false);
// soon gets messy
```
✅ **Todo App with useReducer (clean)**
```js
const [state, dispatch] = useReducer(reducer, { todos: [], filter: "all", loading: false });

dispatch({ type: "add_todo", payload: "Learn React" });
dispatch({ type: "toggle_todo", id: 1 });
```