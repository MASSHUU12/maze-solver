import { CellValue } from "@/enums";

export class Node {
  value: CellValue;
  row: number;
  col: number;
  adjacentNodes: Node[];

  constructor(value: CellValue, row: number, col: number) {
    this.value = value;
    this.row = row;
    this.col = col;
    this.adjacentNodes = [];
  }
}
