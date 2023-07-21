class DaryHeap<T> {
  private heapArray: T[] = [];
  private d: number;

  constructor(d: number) {
    this.d = d;
  }

  public insert(value: T) {
    this.heapArray.push(value);
    this.heapifyUp(this.heapArray.length - 1);
  }

  public extractMin(): T | undefined {
    const min = this.heapArray[0];
    const last = this.heapArray.pop();

    if (this.heapArray.length > 0) {
      this.heapArray[0] = last!;
      this.heapifyDown(0);
    }

    return min;
  }

  private heapifyUp(index: number) {
    const parentIndex = Math.floor((index - 1) / this.d);

    if (parentIndex >= 0 && this.heapArray[index] < this.heapArray[parentIndex]) {
      [this.heapArray[index], this.heapArray[parentIndex]] = [this.heapArray[parentIndex], this.heapArray[index]];
      this.heapifyUp(parentIndex);
    }
  }

  private heapifyDown(index: number) {
    const minChildIndex = this.getMinChildIndex(index);

    if (minChildIndex !== -1 && this.heapArray[index] > this.heapArray[minChildIndex]) {
      [this.heapArray[index], this.heapArray[minChildIndex]] = [this.heapArray[minChildIndex], this.heapArray[index]];
      this.heapifyDown(minChildIndex);
    }
  }

  private getMinChildIndex(index: number): number {
    let minChildIndex = -1;
    const startChildIndex = index * this.d + 1;
    const endChildIndex = Math.min(this.heapArray.length, startChildIndex + this.d);

    for (let i = startChildIndex; i < endChildIndex; i++) {
      if (minChildIndex === -1 || this.heapArray[i] < this.heapArray[minChildIndex]) {
        minChildIndex = i;
      }
    }

    return minChildIndex;
  }

  public isEmpty(): boolean {
    return this.heapArray.length === 0;
  }
}
