import { gridStore } from "@/store/gridStore";
import { Button } from "./common/Button";
import { CellValue } from "@/enums";

export function Clean() {
  function clean(): void {
    const size = gridStore.grid.grid.length;

    for (let i = 0; i < size; i++) {
      const value = gridStore.grid.grid;

      if (value[i] === CellValue.Chosen) gridStore.grid.grid[i] = CellValue.Passage;
    }
  }

  return (
    <Button action={clean}>
      <span>Clean</span>
    </Button>
  );
}
