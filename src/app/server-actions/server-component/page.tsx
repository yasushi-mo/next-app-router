import { revalidatePath } from "next/cache";

// Simulated in-memory task storage
const tasks: string[] = [];

export default function Page() {
  async function addTask(data: FormData) {
    "use server";

    const task = data.get("task");
    if (task && typeof task === "string") {
      tasks.push(task);
      // Revalidate the page to reflect added tasks
      revalidatePath("/server-actions/server-component");
    }
  }

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
