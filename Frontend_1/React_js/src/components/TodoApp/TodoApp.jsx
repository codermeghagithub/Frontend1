// **  List (array) =>
// **In this example, the todos state variable holds an array. Each button handler calls setTodos with the next version of that array. The [...todos] spread syntax, todos.map() and todos.filter() ensure the state array is replaced rather than mutated.

import { useState } from "react";