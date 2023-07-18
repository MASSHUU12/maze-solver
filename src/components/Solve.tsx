import { convertGridToGraph } from "@/lib/graph";
import { Button } from "./common/Button";
import { gridStore } from "@/store/gridStore";
import { findStartNode } from "@/helpers/findStartNode";

export function Solve() {
  function solve() {
    const graph = convertGridToGraph(gridStore.grid);
    const start = findStartNode(graph);

    console.log(graph);
    console.log(start);
  }

  return (
    <Button action={solve}>
      <span>Solve</span>
    </Button>
  );
}
