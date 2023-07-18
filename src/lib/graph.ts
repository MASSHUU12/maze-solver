import { CellValue } from "@/enums";

export class Node {
  value: CellValue;
  adjacentNodes: Node[];

  constructor(value: CellValue) {
    this.value = value;
    this.adjacentNodes = [];
  }
}
