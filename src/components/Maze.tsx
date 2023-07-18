import { CellValue } from "@/enums";
import { CellColor } from "@/helpers/cellColor";
import { gridStore } from "@/store/gridStore";
import { subscribe } from "valtio";

export function Maze() {
  // const [grid, setGrid] = useState(new Grid(10));

  subscribe(gridStore, () => {
    console.log("changed");
  });

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

  function createCell(row: number, col: number) {
    const val: CellValue = gridStore.grid.getCellValue(row, col) as number;
    let bgColor: string = CellColor.Passage.color;

    switch (val) {
      case CellValue.Passage:
        bgColor = CellColor.Passage.color;
        break;

      case CellValue.Wall:
        bgColor = CellColor.Wall.color;
        break;

      case CellValue.Start:
        bgColor = CellColor.Start.color;
        break;

      case CellValue.End:
        bgColor = CellColor.End.color;
        break;

      case CellValue.Chosen:
        bgColor = CellColor.Chosen.color;
        break;
    }

    return (
      <td
        onClick={() => changeCellType(`${row},${col}`)}
        class={`w-10 h-10 cursor-pointer ${bgColor} border-2 border-slate-200`}
        key={`${row},${col}`}></td>
    );
  }

  function changeCellType(key: string) {
    const [row, col] = key.split(",");
    const currPos = [parseInt(row), parseInt(col)];

    gridStore.selectedCell[0] = currPos[0];
    gridStore.selectedCell[1] = currPos[1];
    gridStore.grid.setCellValue(currPos[0], currPos[1], gridStore.selectedColor.value);

    console.log(gridStore.grid.grid);
  }

  function renderGrid() {
    const rows = [];

    for (let i = 0; i < gridStore.grid.size; i++) {
      const cols = [];

      for (let j = 0; j < gridStore.grid.size; j++) {
        cols.push(createCell(i, j));
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
