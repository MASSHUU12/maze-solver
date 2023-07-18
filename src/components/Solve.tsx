import { convertGridToGraph } from "@/lib/graph";
import { Button } from "./common/Button";
import { gridStore } from "@/store/gridStore";
import { findStartNode } from "@/helpers/findStartNode";
import { bfs } from "@/lib/bfs";

export function Solve() {
  function solve() {
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
