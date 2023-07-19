import { CellValue } from "@/enums";

import { Node } from "@/lib/node";
import { Graph } from "@/lib/graph";

/**
 * Finds the start node in a given graph.
 *
 * @param {Graph} graph - The graph to search for the start node.
 * @returns {Node | null} - The start node if found, or null if not found.
 */
export function findStartNode(graph: Graph): Node | null {
  let result: Node | null = null;

  graph.nodes.forEach(node => {
    if (node.value === CellValue.Start) result = node;
  });

  return result;
}
