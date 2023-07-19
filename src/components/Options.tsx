import { VNode } from "preact";
import { useEffect } from "preact/hooks";

import { Grid } from "@/lib/grid";

import { Button } from "./common/Button";
import { Toolbar } from "./common/Toolbar";
import { OptionInput } from "./common/OptionInput";

import { gridStore } from "@/store/gridStore";
import { optionsStore } from "@/store/optionsStore";

/**
 * Options component.
 * @returns {VNode} The rendered Options component.
 */
export function Options(): VNode {
  /**
   * Applies the selected options.
   * @returns {void}
   */
  function apply(): void {
    const size = optionsStore.options["gridSize"];
    const grid = new Grid(size);

    gridStore.grid.grid = grid.grid;
    gridStore.grid.size = size;
  }

  useEffect(() => {
    apply();
  }, []);

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
