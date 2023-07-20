import { proxy } from "valtio";

import { Grid } from "@/lib/grid";
import { CellValue } from "@/enums";
import { statusStore } from "./statusStore";
import { CellColor, cellColor } from "@/helpers/cellColor";
import { optionsStore } from "./optionsStore";

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

  resizeGrid(25);

  optionsStore.options.gridSize = 25;

  statusStore.status = "The board has been reset.";
}

export function resizeGrid(size: number): void {
  const grid = new Grid(size);

  gridStore.grid.grid = grid.grid;
  gridStore.grid.size = size;
}
