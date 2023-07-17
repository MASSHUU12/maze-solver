export class Grid {
  private _size: number;
  private _grid: number[];

  constructor(size: number) {
    this._size = size;
    this._grid = new Array(this._size * this._size).fill(0);
  }

  private getIndex(row: number, column: number): number {
    return row * this.size + column;
  }

  public getCellValue(row: number, column: number): number | null {
    const index = this.getIndex(row, column);

    if (index >= 0 && index < this._grid.length) return this._grid[index];
    return null;
  }

  public setCellValue(x: number, y: number, value: number): boolean {
    const index = this.getIndex(x, y);

    if (!(index >= 0 && index < this._grid.length)) return false;

    this._grid[index] = value;
    return true;
  }

  public get size(): number {
    return this._size;
  }

  public get grid(): number[] {
    return this._grid;
  }
}
