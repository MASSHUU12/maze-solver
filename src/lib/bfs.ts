import { Node } from "./node";
import { CellValue } from "@/enums";

/**
 * Performs a breadth-first search (BFS) starting from the specified root node.
 *
 * @param {Node} root - The root node to start the BFS from.
 * @returns {Node[] | null} An array of nodes representing the path from the root to the target node,
 *                         or null if the target node is not found.
 */
export function bfs(root: Node): Node[] | null {
  const queue: Node[] = [];

  root.explored = true;
  queue.push(root);

  while (queue.length > 0) {
    const v = queue.shift();

    if (v?.value === CellValue.End) return reconstructPath(v);

    const adjacentNodes = v?.adjacentNodes;

    if (adjacentNodes === undefined) continue;

    adjacentNodes.forEach(node => {
      if (!node.explored) {
        node.explored = true;
        node.parent = v ?? null;

        if (node.value === CellValue.Passage) node.value = CellValue.Chosen;

        queue.push(node);
      }
    });
  }

  return null;
}

/**
 * Reconstructs the path from the specified node to the root node.
 *
 * @param {Node} node - The node to start the path reconstruction from.
 * @returns {Node[]} An array of nodes representing the path from the specified node to the root node.
 */
function reconstructPath(node: Node): Node[] {
  const path: Node[] = [];
  let current: Node | null = node;

  while (current != null) {
    path.unshift(current);
    current = current.parent;
  }

  return path;
}
