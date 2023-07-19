import { proxy } from "valtio";

import { Grid } from "@/lib/grid";
import { CellValue } from "@/enums";
import { CellColor, cellColor } from "@/helpers/cellColor";

/**
 * Represents the grid store object.
 *
 * @interface
 */
interface GridStore {
  grid: Grid;
  selectedColor: cellColor;
}

/**
 * The grid store object.
 *
 * @type {GridStore}
 */
export const gridStore = proxy<GridStore>({
  grid: new Grid(25),
  selectedColor: CellColor.Passage,
});

/**
 * Resets the grid store by setting all grid values to CellValue.Passage.
 */
export function resetGridStore() {
  const size = gridStore.grid.size;
  gridStore.selectedColor = CellColor.Passage;

  for (let i = 0; i < size * size; i++) {
    gridStore.grid.grid[i] = CellValue.Passage;
  }
}
