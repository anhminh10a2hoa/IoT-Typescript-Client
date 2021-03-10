export default class PagedResult<T> {
  private items: Array<T> = new Array<T>();
  private offset: number;
  private limit: number;
  private fullSize: number;

  public getItems(): Array<T> {
    return this.items;
  }

  public setItems(items: Array<T>): void {
    this.items = items;
  }

  public getOffset(): number {
    return this.offset;
  }

  public setOffset(offset: number): void {
    this.offset = offset;
  }

  public getLimit(): number {
    return this.limit;
  }

  public setLimit(limit: number): void {
    this.limit = limit;
  }

  public getFullSize(): number {
    return this.fullSize;
  }

  public setFullSize(fullSize: number): void {
    this.fullSize = fullSize;
  }
}