"use server";

import { revalidatePath } from "next/cache";
import { tasks } from "./data";

export async function addTask(data: FormData) {
  const task = data.get("task");
  if (task && typeof task === "string") {
    tasks.push(task);
    // Revalidate the page to reflect added tasks
    revalidatePath("/server-actions/client-component");
  }
}
