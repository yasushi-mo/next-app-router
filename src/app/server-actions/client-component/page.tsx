import { tasks } from "../data";
import ClientComponent from "./ClientComponent";

export default function Page() {
  return <ClientComponent tasks={tasks} />;
}
