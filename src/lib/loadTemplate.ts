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

  const [startX, startY] = t.start.split(":");
  gridStore.grid.setCellValue(parseInt(startX), parseInt(startY), CellValue.Start);

  const [endX, endY] = t.end.split(":");
  gridStore.grid.setCellValue(parseInt(endX), parseInt(endY), CellValue.End);

  for (let i = 0; i < t.walls.length; i++) {
    const wallCoordinates = t.walls[i].match(/(\d+)-?(\d*):(\d+)-?(\d*)/);

    if (wallCoordinates) {
      const [, startXRange, endXRange, startYRange, endYRange] = wallCoordinates;
      const startXStart = parseInt(startXRange);
      const startXEnd = endXRange ? parseInt(endXRange) : startXStart;
      const startYStart = parseInt(startYRange);
      const startYEnd = endYRange ? parseInt(endYRange) : startYStart;

      for (let y = startYStart; y <= startYEnd; y++) {
        for (let x = startXStart; x <= startXEnd; x++) {
          gridStore.grid.setCellValue(y, x, CellValue.Wall);
        }
      }
    } else {
      // Handle single coordinate
      const [x, y] = t.walls[i].split(":");
      gridStore.grid.setCellValue(parseInt(y), parseInt(x), CellValue.Wall);
    }
  }
}
