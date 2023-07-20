import { VNode } from "preact";
import { useSnapshot } from "valtio";
import { useEffect } from "preact/hooks";

import { statusStore } from "@/store/statusStore";

/**
 * Component to display the status message.
 *
 * @returns {VNode} The status component.
 */
export function Status(): VNode {
  const store = useSnapshot(statusStore);

  /**
   * Set the initial status message on component mount.
   *
   * @returns {void}
   */
  useEffect(() => {
    statusStore.status =
      'Press "Solve" to solve the maze, "Clean" to remove the solution, and "Reset" to reset the board.';
  }, []);

  return <>{store.status.length > 0 && <span class="text-sm font-semibold">{store.status}</span>}</>;
}
