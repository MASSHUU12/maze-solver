import { VNode } from "preact";

import { bfs } from "@/lib/bfs";
import { convertGridToGraph } from "@/lib/graph";

import { Button } from "./common/Button";
import { gridStore } from "@/store/gridStore";
import { findStartNode } from "@/helpers/findStartNode";
import { statusStore } from "@/store/statusStore";

/**
 * Component for solving a grid.
 */
export function Solve(): VNode {
  /**
   * Solves the grid by finding the path from the start node to the goal node.
   */
  function solve(): void {
    const graph = convertGridToGraph(gridStore.grid);
    const start = findStartNode(graph);

    if (start === null) {
      statusStore.status = "Maze does not have a start, add it and try again.";
      return;
    }

    const startTime = performance.now();
    const path = bfs(start);
    const endTime = performance.now();

    if (path === null) {
      statusStore.status = "The maze has no solution.";
      return;
    }

    statusStore.status = `Solution found in ${((startTime - endTime) / 1000).toFixed(2)}ms.`;

    path.forEach(node => {
      gridStore.grid.setCellValue(node.row, node.col, node.value);
    });
  }

  return (
    <Button action={solve}>
      <span>Solve</span>
    </Button>
  );
}
