import { VNode } from "preact";

import { CellValue } from "@/enums";
import { Button } from "./common/Button";
import { gridStore } from "@/store/gridStore";
import { statusStore } from "@/store/statusStore";

/**
 * Renders a "Clean" button component.
 *
 * @returns {VNode} The rendered Clean button component.
 */
export function Clean(): VNode {
  /**
   * Cleans the grid by changing any cell with the value CellValue.Chosen to CellValue.Passage.
   *
   * @returns {void}
   */
  function clean(): void {
    const size = gridStore.grid.grid.length;

    for (let i = 0; i < size; i++) {
      const value = gridStore.grid.grid;

      if (value[i] === CellValue.Chosen) gridStore.grid.grid[i] = CellValue.Passage;
    }

    statusStore.status = "Removed solution from the board.";
  }

  return (
    <Button action={clean}>
      <span>Clean</span>
    </Button>
  );
}
