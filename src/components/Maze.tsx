import { VNode } from "preact";
import { useSnapshot } from "valtio";

import { MazeCell } from "./MazeCell";
import { gridStore } from "@/store/gridStore";

/**
 * Renders a maze grid using Preact components.
 *
 * @returns {VNode} The rendered Maze component.
 */
export function Maze(): VNode {
  const grid = useSnapshot(gridStore.grid);

  /**
   * Renders the grid cells.
   *
   * @returns {VNode[]} An array of VNode elements representing the grid cells.
   */
  function renderGrid(): VNode[] {
    const rows = [];

    for (let i = 0; i < grid.size; i++) {
      const cols = [];

      for (let j = 0; j < grid.size; j++) {
        cols.push(<MazeCell col={i} row={j} key={`${i},${j}`} />);
      }

      rows.push(<tr key={i}>{cols}</tr>);
    }

    return rows;
  }

  return (
    <table class="w-fit border-collapse border-2 border-slate-300">
      <tbody>{renderGrid()}</tbody>
    </table>
  );
}
