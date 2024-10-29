"use client";

import { addTask } from "../action";

export default function ClientComponent({ tasks }: { tasks: string[] }) {
  return (
    <div>
      <form action={addTask}>
        <label htmlFor="task">Enter Task</label>
        <br />
        <input id="task" name="task" type="text" required />
        <button type="submit">Add</button>
      </form>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
