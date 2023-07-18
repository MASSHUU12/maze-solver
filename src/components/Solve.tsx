import { convertGridToGraph } from "@/lib/graph";
import { Button } from "./common/Button";
import { gridStore } from "@/store/gridStore";

export function Solve() {
  function solve() {
    console.log(convertGridToGraph(gridStore.grid));
  }

  return (
    <Button action={solve}>
      <span>Solve</span>
    </Button>
  );
}
