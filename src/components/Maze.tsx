import { Grid } from "@/lib/grid";
import { useState } from "preact/hooks";

export function Maze() {
  const [grid] = useState(new Grid(10));

  function createCell(cell: number) {
    return <span class="w-8 h-8 block">{cell}</span>;
  }

  return (
    <table>
      <tbody>
        {Array(grid.size)
          .fill(null)
          .map((_, row) => (
            <tr key={row}>
              {Array(grid.size)
                .fill(null)
                .map((_, col) => {
                  return <td key={col}>{createCell(grid.getCellValue(row, col) as number)}</td>;
                })}
            </tr>
          ))}
      </tbody>
    </table>
  );
}
