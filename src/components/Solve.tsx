import { VNode } from "preact";

import { bfs } from "@/lib/bfs";
import { convertGridToGraph } from "@/lib/graph";

import { Button } from "./common/Button";
import { gridStore } from "@/store/gridStore";
import { findStartNode } from "@/helpers/findStartNode";

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

    if (start === null) return;

    const path = bfs(start);

    path?.forEach(node => {
      gridStore.grid.setCellValue(node.row, node.col, node.value);
    });
  }

  return (
    <Button action={solve}>
      <span>Solve</span>
    </Button>
  );
}
