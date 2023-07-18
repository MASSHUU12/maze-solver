import { gridStore } from "@/store/gridStore";
import { useSnapshot } from "valtio";
import { MazeCell } from "./MazeCell";

export function Maze() {
  // const [grid, setGrid] = useState(new Grid(10));
  const grid = useSnapshot(gridStore.grid);

  // useEffect(() => {
  // Setup basic grid for testing
  // const g = new Grid(10);
  // for (let i = 0; i < 10; i++) {
  //   g.setCellValue(0, i, CellValue.Wall);
  //   g.setCellValue(i, 0, CellValue.Wall);
  //   g.setCellValue(9, i, CellValue.Wall);
  //   g.setCellValue(i, 9, CellValue.Wall);
  //   g.setCellValue(i, 5, CellValue.Wall);
  //   g.setCellValue(4, i - 1, CellValue.Chosen);
  // }
  // g.setCellValue(4, 0, CellValue.Start);
  // g.setCellValue(7, 9, CellValue.End);
  // g.setCellValue(5, 8, CellValue.Chosen);
  // g.setCellValue(6, 8, CellValue.Chosen);
  // g.setCellValue(7, 8, CellValue.Chosen);
  // gridStore.grid = g;
  //   console.log("a");
  // }, [gridStore]);

  function renderGrid() {
    const rows = [];

    for (let i = 0; i < grid.size; i++) {
      const cols = [];

      for (let j = 0; j < grid.size; j++) {
        cols.push(<MazeCell col={i} row={j} />);
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
