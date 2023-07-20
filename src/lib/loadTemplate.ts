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

  for (const wallCoord of t.walls) {
    const [xCoords, yCoords] = wallCoord.split(":");

    const xRanges = xCoords.split(",");
    const yRanges = yCoords.split(",");

    for (const xRange of xRanges) {
      const xRangeParts = xRange.split("-");
      const startXStart = parseInt(xRangeParts[0]);
      const startXEnd = xRangeParts[1] ? parseInt(xRangeParts[1]) : startXStart;

      for (const yRange of yRanges) {
        const yRangeParts = yRange.split("-");
        const startYStart = parseInt(yRangeParts[0]);
        const startYEnd = yRangeParts[1] ? parseInt(yRangeParts[1]) : startYStart;

        for (let y = startYStart; y <= startYEnd; y++) {
          for (let x = startXStart; x <= startXEnd; x++) {
            gridStore.grid.setCellValue(y, x, CellValue.Wall);
          }
        }
      }
    }
  }
}
