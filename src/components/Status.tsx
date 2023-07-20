import { statusStore } from "@/store/statusStore";
import { VNode } from "preact";
import { useEffect } from "preact/hooks";
import { useSnapshot } from "valtio";

export function Status(): VNode {
  const store = useSnapshot(statusStore);

  useEffect(() => {
    statusStore.status =
      'Press "Solve" to solve the maze, "Clean" to remove the solution, and "Reset" to reset the board.';
  }, []);

  return <>{store.status.length > 0 && <span class="text-sm font-semibold">{store.status}</span>}</>;
}
