import { useReducer, useState } from "react";

const types = {
  add: "add",
  update: "update",
  delete: "delete",
};

const initialToDo = [
  { id: 1, title: "Todo #1" },
  { id: 2, title: "Todo #2" },
  { id: 3, title: "Todo #3" },
];

const reducer = (state, action) => {
  switch (action.type) {
    case types.delete:
      return state.filter((task) => task.id !== action.payload);

    case types.add:
      return [...state, action.payload];

    case types.update: {
        const taskEdit = action.payload
        return state.map(task => task.id === taskEdit.id ? taskEdit : task)
    }

    default:
      return state;
  }
};

const ToDo = () => {
  const [tasks, dispatch] = useReducer(reducer, initialToDo);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: Date.now(), title: text };

    dispatch({ type: types.add, payload: newTask });
  };

  return (
    <div>
      <h2>Task list</h2>
      <ul>
        {tasks.map((task) => (
          <li style={{ listStyle: "none" }} key={task.id}>
            {task.title}
            <button
              onClick={() => dispatch({ type: types.delete, payload: task.id })}
            >
              Delete
            </button>
            <button
              onClick={() => dispatch({ type: types.update, payload: {...task, title: text} })}
            >
              Update
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Tasks"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </div>
  );
};

export default ToDo;
