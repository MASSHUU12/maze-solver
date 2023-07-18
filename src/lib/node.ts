import { CellValue } from "@/enums";

export class Node {
  value: CellValue;
  row: number;
  col: number;
  adjacentNodes: Node[];
  neighbors: {
    row: number;
    col: number;
  }[];

  constructor(value: CellValue, row: number, col: number) {
    this.value = value;
    this.row = row;
    this.col = col;
    this.adjacentNodes = [];
    this.neighbors = [];
  }
}
