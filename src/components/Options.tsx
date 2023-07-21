import { VNode } from "preact";
import { useEffect } from "preact/hooks";

import { Templates } from "./Templates";
import templates from "@/templates.json";

import { Button } from "./common/Button";
import { Toolbar } from "./common/Toolbar";
import { OptionInput } from "./common/OptionInput";

import { loadTemplate } from "@/lib/loadTemplate";
import { generateRandomMaze } from "@/lib/randomMazeGenerator";

import { statusStore } from "@/store/statusStore";
import { optionsStore } from "@/store/optionsStore";
import { resetGridStore, resizeGrid } from "@/store/gridStore";

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
    const size = optionsStore.options.gridSize;
    const template = optionsStore.options.template;

    resizeGrid(size);

    if (template === "custom") {
      resetGridStore();
      return;
    }

    if (template === "random") {
      generateRandomMaze();
      return;
    }

    for (const t of templates) {
      if (t.name === template) {
        loadTemplate(t);
        statusStore.status = `Loaded template: ${template}.`;
        break;
      }
    }
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
          <Templates />
          <Button action={() => {}}>
            <span>Apply</span>
          </Button>
        </form>
      </Toolbar>
    </section>
  );
}
