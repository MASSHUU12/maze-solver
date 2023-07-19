import { CellValue } from "@/enums";
import { CellColor } from "@/helpers/cellColor";
import { gridStore } from "@/store/gridStore";
import { useEffect, useRef, useState } from "preact/hooks";
import { useSnapshot } from "valtio";

interface Props {
  row: number;
  col: number;
}

export function MazeCell({ row, col }: Props) {
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

  function changeCellType(key: string) {
    const [row, col] = key.split(",");
    const currPos = [parseInt(row), parseInt(col)];

    gridStore.grid.setCellValue(currPos[0], currPos[1], gridStore.selectedColor.value);
  }

  return (
    <td
      ref={td}
      onClick={() => changeCellType(`${row},${col}`)}
      class={`cursor-pointer ${bgColor} border-2 border-slate-200 hover:brightness-90`}
      key={`${row},${col}`}></td>
  );
}
