import { CellValue } from "@/enums";

export type cellColor = {
  color: string;
  value: CellValue;
};

export class CellColor {
  public static Passage: cellColor = {
    color: "bg-slate-100",
    value: CellValue.Passage,
  };
  public static Wall: cellColor = {
    color: "bg-cyan-400",
    value: CellValue.Wall,
  };
  public static Start: cellColor = {
    color: "bg-rose-700",
    value: CellValue.Start,
  };
  public static End: cellColor = {
    color: "bg-fuchsia-900",
    value: CellValue.End,
  };
  public static Chosen = {
    color: "bg-emerald-400",
    value: CellValue.Chosen,
  };
}
