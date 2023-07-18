import { CellValue } from "@/enums";
import { Graph } from "@/lib/graph";
import { Node } from "@/lib/node";

export function findStartNode(graph: Graph): Node | null {
  let result: Node | null = null;

  graph.nodes.forEach(node => {
    if (node.value === CellValue.Start) result = node;
  });

  return result;
}
