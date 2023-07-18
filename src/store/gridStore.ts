import { CellColor, cellColor } from "@/helpers/cellColor";
import { Grid } from "@/lib/grid";
import { proxy } from "valtio";

interface GridStore {
  grid: Grid;
  selectedCell: [row: number, col: number];
  selectedColor: cellColor;
}

export const gridStore = proxy<GridStore>({
  grid: new Grid(10),
  selectedCell: [-1, -1],
  selectedColor: CellColor.Passage,
});
