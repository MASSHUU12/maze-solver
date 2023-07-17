import { CellValue } from "@/enums";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface GridStore {
  grid: CellValue[];
  selectedCell: [row: number, col: number];
}

export const useGridStore = create<GridStore>()(
  devtools(set => ({
    grid: [],
    selectedCell: [-1, -1],
  })),
);
