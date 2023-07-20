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

  let x = parseInt(t.start.split(":")[0]);
  let y = parseInt(t.start.split(":")[1]);
  gridStore.grid.setCellValue(x, y, CellValue.Start);

  x = parseInt(t.end.split(":")[0]);
  y = parseInt(t.end.split(":")[1]);
  gridStore.grid.setCellValue(x, y, CellValue.End);

  for (const wallCoord of t.walls) {
    const [xCoords, yCoords] = wallCoord.split(":");
    setWallCoordinates(xCoords, yCoords);
  }
}

function setWallCoordinates(xCoords: string, yCoords: string): void {
  const parseRange = (range: string): { start: number; end: number } => {
    const rangeParts = range.split("-");
    const start = parseInt(rangeParts[0]);
    const end = rangeParts.length > 1 ? parseInt(rangeParts[1]) : start;
    return { start, end };
  };

  const xRanges = xCoords.split(",").map(parseRange);
  const yRanges = yCoords.split(",").map(parseRange);

  for (const { start: startXStart, end: startXEnd } of xRanges) {
    for (const { start: startYStart, end: startYEnd } of yRanges) {
      for (let y = startYStart; y <= startYEnd; y++) {
        for (let x = startXStart; x <= startXEnd; x++) {
          gridStore.grid.setCellValue(y, x, CellValue.Wall);
        }
      }
    }
  }
}
