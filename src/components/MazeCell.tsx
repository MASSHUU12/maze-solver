import { CellValue } from "@/enums";
import { CellColor } from "@/helpers/cellColor";
import { gridStore } from "@/store/gridStore";
import { useEffect, useState } from "preact/hooks";
import { useSnapshot } from "valtio";

interface Props {
  row: number;
  col: number;
}

export function MazeCell({ row, col }: Props) {
  const grid = useSnapshot(gridStore.grid);
  const value = grid.getCellValue(row, col);
  const [bgColor, setBgColor] = useState(CellColor.Passage.color);

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

  function changeCellType(key: string) {
    const [row, col] = key.split(",");
    const currPos = [parseInt(row), parseInt(col)];

    gridStore.grid.setCellValue(currPos[0], currPos[1], gridStore.selectedColor.value);
  }

  return (
    <td
      onClick={() => changeCellType(`${row},${col}`)}
      class={`w-10 h-10 cursor-pointer ${bgColor} border-2 border-slate-200`}
      key={`${row},${col}`}></td>
  );
}
