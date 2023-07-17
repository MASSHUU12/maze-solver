import { Grid } from "@/lib/grid";
import { CellValue } from "@/enums";
import { useEffect } from "preact/hooks";
import { useGridStore } from "@/store/gridStore";

export function Maze() {
  // const [grid, setGrid] = useState(new Grid(10));
  const gridStore = useGridStore();

  useEffect(() => {
    // Setup basic grid for testing
    const g = new Grid(10);

    for (let i = 0; i < 10; i++) {
      g.setCellValue(0, i, CellValue.Wall);
      g.setCellValue(i, 0, CellValue.Wall);
      g.setCellValue(9, i, CellValue.Wall);
      g.setCellValue(i, 9, CellValue.Wall);
      g.setCellValue(i, 5, CellValue.Wall);

      g.setCellValue(4, i - 1, CellValue.Chosen);
    }

    g.setCellValue(4, 0, CellValue.Start);
    g.setCellValue(7, 9, CellValue.End);

    g.setCellValue(5, 8, CellValue.Chosen);
    g.setCellValue(6, 8, CellValue.Chosen);
    g.setCellValue(7, 8, CellValue.Chosen);

    gridStore.grid = g;
  }, [gridStore]);

  function createCell(row: number, col: number) {
    const val: CellValue = gridStore.grid.getCellValue(row, col) as number;
    let bgColor: string = "";

    switch (val) {
      case CellValue.Passage:
        bgColor = "bg-slate-100";
        break;

      case CellValue.Wall:
        bgColor = "bg-cyan-400";
        break;

      case CellValue.Start:
        bgColor = "bg-rose-700";
        break;

      case CellValue.End:
        bgColor = "bg-fuchsia-900";
        break;

      case CellValue.Chosen:
        bgColor = "bg-emerald-400";
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

    gridStore.selectedCell = [currPos[0], currPos[1]];

    console.log("Pos:", ...gridStore.selectedCell);
  }

  return (
    <table class="w-fit border-collapse border-2 border-slate-300">
      <tbody>
        {Array(gridStore.grid.size)
          .fill(null)
          .map((_, row) => (
            <tr key={row}>
              {Array(gridStore.grid.size)
                .fill(null)
                .map((_, col) => {
                  return createCell(row, col);
                })}
            </tr>
          ))}
      </tbody>
    </table>
  );
}
