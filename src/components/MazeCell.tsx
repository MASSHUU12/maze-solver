import { VNode } from "preact";
import { useSnapshot } from "valtio";
import { useEffect, useRef, useState } from "preact/hooks";

import { CellValue } from "@/enums";
import { gridStore } from "@/store/gridStore";
import { CellColor } from "@/helpers/cellColor";
import { optionsStore } from "@/store/optionsStore";

/**
 * Props for the MazeCell component.
 */
type Props = {
  row: number;
  col: number;
};

/**
 * Represents a cell in the maze grid.
 *
 * @param {Props} props - The component props.
 * @returns {VNode} The rendered MazeCell component.
 */
export function MazeCell({ row, col }: Props): VNode {
  const grid = useSnapshot(gridStore.grid);
  const value = grid.getCellValue(row, col);
  const [bgColor, setBgColor] = useState(CellColor.Passage.color);
  const [cellSize] = useState(30 / grid.size);
  const td = useRef<HTMLTableCellElement>(null);

  useEffect(() => {
    switch (value) {
      case CellValue.Passage:
        setBgColor(CellColor.Passage.color);
        break;

      case CellValue.Wall:
        setBgColor(CellColor.Wall.color);
        break;

      case CellValue.Start:
        setBgColor(CellColor.Start.color);
        break;

      case CellValue.End:
        setBgColor(CellColor.End.color);
        break;

      case CellValue.Chosen:
        setBgColor(CellColor.Chosen.color);
        break;
    }
  }, [value, bgColor]);

  useEffect(() => {
    td.current!.style.width = cellSize + "rem";
    td.current!.style.height = cellSize + "rem";
  }, [cellSize]);

  /**
   * Changes the type of the cell when clicked.
   *
   * @param {string} key - The key representing the cell position (row, col).
   */
  function changeCellType(key: string): void {
    const [row, col] = key.split(",");
    const currPos = [parseInt(row), parseInt(col)];

    gridStore.grid.setCellValue(currPos[0], currPos[1], gridStore.selectedColor.value);
    optionsStore.options.template = "custom";
  }

  return (
    <td
      ref={td}
      onMouseDown={() => changeCellType(`${row},${col}`)}
      onMouseOver={e => {
        if (e.buttons === 1) changeCellType(`${row},${col}`);
      }}
      class={`cursor-pointer ${bgColor} border-2 border-slate-200 hover:brightness-90`}
      key={`${row},${col}`}></td>
  );
}
