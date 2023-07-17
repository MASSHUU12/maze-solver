import { Grid } from "@/lib/grid";
import { CellValue } from "@/enums";
import { useEffect, useState } from "preact/hooks";

export function Maze() {
  const [grid, setGrid] = useState(new Grid(10));

  useEffect(() => {
    // Setup basic grid for testing
    const g = new Grid(10);
    g.setCellValue(2, 2, CellValue.Wall);
    g.setCellValue(3, 2, CellValue.Wall);
    g.setCellValue(4, 2, CellValue.Wall);
    g.setCellValue(4, 0, CellValue.Start);
    g.setCellValue(4, 9, CellValue.End);

    setGrid(g);
  }, [grid]);

  function createCell(row: number, col: number) {
    const val: CellValue = grid.getCellValue(row, col) as number;
    let bgColor: string = "";

    switch (val) {
      case CellValue.Passage:
        bgColor = "bg-slate-100";
        break;

      case CellValue.Wall:
        bgColor = "bg-red-300";
        break;

      case CellValue.Start:
        bgColor = "bg-cyan-400";
        break;

      case CellValue.End:
        bgColor = "bg-neutral-400";
        break;
    }

    return <td class={`w-10 h-10 ${bgColor} border-2 border-slate-200`} key={col}></td>;
  }

  return (
    <table class="w-fit border-collapse border-2 border-slate-300">
      <tbody>
        {Array(grid.size)
          .fill(null)
          .map((_, row) => (
            <tr key={row}>
              {Array(grid.size)
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
