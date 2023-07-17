import { CellColor } from "@/helpers/cellColor";
import { Grid } from "@/lib/grid";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface GridStore {
  grid: Grid;
  selectedCell: [row: number, col: number];
  selectedColor: CellColor;
}

export const useGridStore = create<GridStore>()(
  devtools(set => ({
    grid: new Grid(10),
    selectedCell: [-1, -1],
    selectedColor: CellColor,
  })),
);
