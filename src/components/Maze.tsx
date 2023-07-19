import { gridStore } from "@/store/gridStore";
import { useSnapshot } from "valtio";
import { MazeCell } from "./MazeCell";
import { useEffect } from "preact/hooks";
import { CellValue } from "@/enums";

export function Maze() {
  const grid = useSnapshot(gridStore.grid);

  // Test maze
  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      gridStore.grid.setCellValue(i, 0, CellValue.Wall);
      gridStore.grid.setCellValue(0, i, CellValue.Wall);
      gridStore.grid.setCellValue(i, 9, CellValue.Wall);
      gridStore.grid.setCellValue(9, i, CellValue.Wall);
      gridStore.grid.setCellValue(5, i, CellValue.Wall);
    }

    gridStore.grid.setCellValue(0, 4, CellValue.Start);
    gridStore.grid.setCellValue(9, 7, CellValue.End);
    gridStore.grid.setCellValue(5, 6, CellValue.Passage);
  }, []);

  function renderGrid() {
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
