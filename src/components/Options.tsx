import { gridStore } from "@/store/gridStore";
import { Input } from "./common/Input";
import { Toolbar } from "./common/Toolbar";
import { useState } from "preact/hooks";
import { Button } from "./common/Button";
import { Grid } from "@/lib/grid";

export function Options() {
  const [gridSize, setGridSize] = useState(`${gridStore.grid.size}`);

  function apply() {
    const grid = new Grid(parseInt(gridSize) ?? gridStore.grid.size);

    gridStore.grid.grid = grid.grid;
    gridStore.grid.size = grid.size;

    console.log(gridStore.grid.grid);
  }

  return (
    <section class="flex flex-col items-center gap-5">
      <h2 class="text-2xl">Options</h2>
      <Toolbar>
        <form
          class="flex flex-col gap-2"
          onSubmit={e => {
            e.preventDefault();
            apply();
          }}>
          <Input label="Grid size" type="number" state={gridSize} stateUpdater={setGridSize} placeholder="Grid size" />
          <Button action={apply}>
            <span>Apply</span>
          </Button>
        </form>
      </Toolbar>
    </section>
  );
}
