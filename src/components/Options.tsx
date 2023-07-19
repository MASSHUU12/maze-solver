import { gridStore } from "@/store/gridStore";
import { OptionInput } from "./common/OptionInput";
import { Toolbar } from "./common/Toolbar";
import { useEffect } from "preact/hooks";
import { Button } from "./common/Button";
import { Grid } from "@/lib/grid";
import { optionsStore } from "@/store/optionsStore";

export function Options() {
  useEffect(() => {
    apply();
  }, []);

  function apply() {
    const size = optionsStore.options["gridSize"];
    const grid = new Grid(size);

    gridStore.grid.grid = grid.grid;
    gridStore.grid.size = size;
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
          <OptionInput option="gridSize" label="Grid size" type="number" placeholder="Grid size" min={2} />
          <Button action={apply}>
            <span>Apply</span>
          </Button>
        </form>
      </Toolbar>
    </section>
  );
}
