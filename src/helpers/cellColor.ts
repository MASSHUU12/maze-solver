import { CellValue } from "@/enums";

/**
 * Represents a cell color with its corresponding value.
 */
export type cellColor = {
  color: string;
  value: CellValue;
};

/**
 * Represents a collection of predefined cell colors.
 */
export class CellColor {
  /**
   * Represents a passage cell color.
   */
  public static Passage: cellColor = {
    color: "bg-slate-100",
    value: CellValue.Passage,
  };

  /**
   * Represents a wall cell color.
   */
  public static Wall: cellColor = {
    color: "bg-cyan-400",
    value: CellValue.Wall,
  };

  /**
   * Represents a start cell color.
   */
  public static Start: cellColor = {
    color: "bg-rose-700",
    value: CellValue.Start,
  };

  /**
   * Represents an end cell color.
   */
  public static End: cellColor = {
    color: "bg-fuchsia-900",
    value: CellValue.End,
  };

  /**
   * Represents a chosen cell color.
   */
  public static Chosen = {
    color: "bg-emerald-400",
    value: CellValue.Chosen,
  };
}
