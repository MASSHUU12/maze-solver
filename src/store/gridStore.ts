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
