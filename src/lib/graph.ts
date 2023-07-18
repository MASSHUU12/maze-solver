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

      node.neighbors = getNeighborCoordinates(row, col, size);
    }
  }

  // Add edges between nodes
  graph.nodes.forEach(node => {
    node.neighbors.forEach(neighborCoordinates => {
      const { row, col } = neighborCoordinates;
      const neighborNode = graph.findNode(row, col);

      if (neighborNode) {
        graph.addEdge(node, neighborNode);
      }
    });
  });

  return graph;
}

function getNeighborCoordinates(
  row: number,
  col: number,
  size: number,
): {
  row: number;
  col: number;
}[] {
  const neighbors = [];

  if (row - 1 >= 0) neighbors.push({ row: row - 1, col });
  if (row + 1 < size) neighbors.push({ row: row + 1, col });
  if (col - 1 >= 0) neighbors.push({ row, col: col - 1 });
  if (col + 1 < size) neighbors.push({ row, col: col + 1 });

  return neighbors;
}
