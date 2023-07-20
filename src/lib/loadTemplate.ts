import { CellValue } from "@/enums";
import { gridStore, resizeGrid } from "@/store/gridStore";

type TemplateInfo = {
  name: string;
  size: number;
  start: string;
  end: string;
  walls: string[];
};

export function loadTemplate(t: TemplateInfo): void {
  resizeGrid(t.size);

  let [x, y] = t.start.split(",");
  gridStore.grid.setCellValue(parseInt(x), parseInt(y), CellValue.Start);
  [x, y] = t.end.split(",");
  gridStore.grid.setCellValue(parseInt(x), parseInt(y), CellValue.End);

  for (let i = 0; i < t.walls.length; i++) {
    const [x, y] = t.walls[i].split(",");

    gridStore.grid.setCellValue(parseInt(y), parseInt(x), CellValue.Wall);
  }
}
