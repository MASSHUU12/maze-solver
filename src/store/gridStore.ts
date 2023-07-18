import { CellValue } from "@/enums";
import { CellColor, cellColor } from "@/helpers/cellColor";
import { Grid } from "@/lib/grid";
import { proxy } from "valtio";

interface GridStore {
  grid: Grid;
  selectedColor: cellColor;
}

export const gridStore = proxy<GridStore>({
  grid: new Grid(10),
  selectedColor: CellColor.Passage,
});

export function resetGridStore() {
  const size = gridStore.grid.size;
  gridStore.selectedColor = CellColor.Passage;

  for (let i = 0; i < size * size; i++) {
    gridStore.grid.grid[i] = CellValue.Passage;
  }
}
