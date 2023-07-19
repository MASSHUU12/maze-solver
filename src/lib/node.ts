import { CellValue } from "@/enums";

/**
 * Represents a node in a graph.
 */
export class Node {
  /**
   * The value of the cell in the node.
   *
   * @type {CellValue}
   */
  public value: CellValue;
  /**
   * The row index of the node in the grid.
   *
   * @type {number}
   */
  public row: number;
  /**
   * The column index of the node in the grid.
   *
   * @type {number}
   */
  public col: number;
  /**
   * The list of adjacent nodes.
   *
   * @type {Node[]}
   */
  public adjacentNodes: Node[];
  /**
   * The list of neighbor positions.
   *
   * @type {Object[]}
   * @property {number} row - The row index of the neighbor.
   * @property {number} col - The column index of the neighbor.
   */
  public neighbors: {
    row: number;
    col: number;
  }[];
  /**
   * Indicates whether the node has been explored.
   *
   * @type {boolean}
   */
  public explored: boolean;
  /**
   * The parent node in the path.
   *
   * @type {Node|null}
   */
  public parent: Node | null;

  /**
   * Constructs a new instance of the Node class.
   *
   * @param {CellValue} value - The value of the cell in the node.
   * @param {number} row - The row index of the node in the grid.
   * @param {number} col - The column index of the node in the grid.
   */
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
