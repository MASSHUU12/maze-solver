import { CellValue } from "@/enums";

import { optionsStore } from "@/store/optionsStore";
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
  optionsStore.options.template = t.name;

  const { start, end, walls } = t;
  const [startX, startY] = start.split(":").map(coord => parseInt(coord));
  const [endX, endY] = end.split(":").map(coord => parseInt(coord));

  gridStore.grid.setCellValue(startX, startY, CellValue.Start);
  gridStore.grid.setCellValue(endX, endY, CellValue.End);

  walls.forEach(setWallCoordinates);
}

function parseRange(range: string): { start: number; end: number } {
  const [start, end] = range.split("-").map(Number);
  return { start, end: end || start };
}

function setWallCoordinates(wallCoord: string): void {
  const [xCoords, yCoords] = wallCoord.split(":");
  const xRanges = xCoords.split(",").map(parseRange);
  const yRanges = yCoords.split(",").map(parseRange);

  for (const { start: startYStart, end: startYEnd } of yRanges) {
    for (const { start: startXStart, end: startXEnd } of xRanges) {
      setWallCells(startXStart, startXEnd, startYStart, startYEnd);
    }
  }
}

function setWallCells(startX: number, endX: number, startY: number, endY: number): void {
  for (let y = startY; y <= endY; y++) {
    for (let x = startX; x <= endX; x++) {
      gridStore.grid.setCellValue(x, y, CellValue.Wall);
    }
  }
}
