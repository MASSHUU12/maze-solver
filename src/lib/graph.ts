import { CellValue } from "@/enums";
import { Grid } from "./grid";
import { Node } from "./node";

export interface IGraph {
  nodes: Map<string, Node>;
  addNode(node: Node): void;
  addEdge(node1: Node, node2: Node): void;
  findNode(row: number, col: number): Node | null;
}

export class Graph implements IGraph {
  nodes: Map<string, Node>;

  constructor() {
    this.nodes = new Map<string, Node>();
  }

  public addNode(node: Node): void {
    this.nodes.set(`${node.row},${node.col}`, node);
  }

  public addEdge(node1: Node, node2: Node): void {
    node1.adjacentNodes.push(node2);
    node2.adjacentNodes.push(node1);
  }

  public findNode(row: number, col: number): Node | null {
    const key = `${row},${col}`;
    return this.nodes.get(key) ?? null;
  }
}

export function convertGridToGraph(grid: Grid): Graph {
  const size = grid.size;
  const graph = new Graph();

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const cellValue = grid.getCellValue(row, col);

      if (cellValue === CellValue.Wall || cellValue === CellValue.Chosen || cellValue === null) continue;

      const node = new Node(cellValue, row, col);
      graph.addNode(node);

      const adjacentCells = getAdjacentCells(row, col);
      adjacentCells.forEach(cell => {
        const value = grid.getCellValue(cell.row, cell.column);

        if (value === CellValue.Passage || value === CellValue.Start || value === CellValue.End) {
          const adjacentNode = graph.findNode(cell.row, cell.column);

          if (adjacentNode) graph.addEdge(node, adjacentNode);
          else {
            const newNode = new Node(value, cell.row, cell.column);
            graph.addNode(newNode);
            graph.addEdge(node, newNode);
            node.adjacentNodes.push(newNode);
          }
        }
      });
    }
  }

  return graph;
}

function getAdjacentCells(row: number, column: number) {
  return [
    { row: row - 1, column }, // Top cell
    { row: row + 1, column }, // Bottom cell
    { row, column: column - 1 }, // Left cell
    { row, column: column + 1 }, // Right cell
  ];
}
