import { CellValue } from "@/enums";

/**
 * Represents a grid.
 */
export class Grid {
  private _size: number;
  private _grid: number[];

  /**
   * Creates a new Grid instance.
   *
   * @param {number} size - The size of the grid.
   */
  constructor(size: number) {
    this._size = size;
    this._grid = new Array(this._size * this._size).fill(CellValue.Passage);
  }

  /**
   * Calculates the index in the grid based on the given row and column.
   *
   * @param {number} row - The row index.
   * @param {number} column - The column index.
   * @returns {number} The calculated index.
   */
  private getIndex(row: number, column: number): number {
    return row * this.size + column;
  }

  /**
   * Retrieves the value of a cell in the grid.
   *
   * @param {number} row - The row index of the cell.
   * @param {number} column - The column index of the cell.
   * @returns {CellValue | null} The value of the cell, or null if the indices are out of bounds.
   */
  public getCellValue(row: number, column: number): CellValue | null {
    const index = this.getIndex(row, column);

    if (index >= 0 && index < this._grid.length) return this._grid[index];
    return null;
  }

  /**
   * Sets the value of a cell in the grid.
   *
   * @param {number} x - The row index of the cell.
   * @param {number} y - The column index of the cell.
   * @param {CellValue} value - The new value for the cell.
   * @returns {boolean} True if the cell value was set successfully, false otherwise.
   */
  public setCellValue(x: number, y: number, value: CellValue): boolean {
    const index = this.getIndex(x, y);

    if (!(index >= 0 && index < this._grid.length)) return false;

    this._grid[index] = value;
    return true;
  }

  /**
   * Gets the size of the grid.
   *
   * @returns {number} The size of the grid.
   */
  public get size(): number {
    return this._size;
  }

  /**
   * Sets the size of the grid.
   *
   * @param {number} size - The new size for the grid.
   */
  public set size(size: number) {
    this._size = size;
  }

  /**
   * Gets the grid.
   *
   * @returns {CellValue[]} The grid.
   */
  public get grid(): CellValue[] {
    return this._grid;
  }

  /**
   * Sets the grid.
   *
   * @param {number[]} grid - The new grid.
   */
  public set grid(grid: number[]) {
    this._grid = grid;
  }
}
