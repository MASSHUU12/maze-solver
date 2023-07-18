import { CellValue } from "@/enums";
import { Node } from "./node";

export function bfs(root: Node): Node | null {
  const queue: Node[] = [];

  root.explored = true;
  queue.push(root);

  while (queue.length > 0) {
    const v = queue.shift();

    if (v?.value === CellValue.End) return v;

    const adjacentNodes = v?.adjacentNodes;

    if (adjacentNodes === undefined) continue;

    adjacentNodes.forEach(node => {
      if (!node.explored) {
        node.explored = true;

        if (node.value === CellValue.Passage) node.value = CellValue.Chosen;

        queue.push(node);
      }
    });
  }

  return null;
}
