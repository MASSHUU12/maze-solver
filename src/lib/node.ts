import { CellValue } from "@/enums";

export class Node {
  public value: CellValue;
  public row: number;
  public col: number;
  public adjacentNodes: Node[];
  public neighbors: {
    row: number;
    col: number;
  }[];
  public explored: boolean;
  public parent: Node | null;

  constructor(value: CellValue, row: number, col: number) {
    this.value = value;
    this.row = row;
    this.col = col;
    this.adjacentNodes = [];
    this.neighbors = [];
    this.explored = false;
    this.parent = null;
  }
}
