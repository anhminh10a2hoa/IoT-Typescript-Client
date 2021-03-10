export default class WriteResult {
  private href: URL;
  private writtenCount: number;

  public getHref(): URL {
    return this.href;
  }

  public setHref(href: URL): void {
    this.href = href;
  }

  public getWrittenCount(): number {
    return this.writtenCount;
  }

  public setWrittenCount(writtenCount: number): void {
    this.writtenCount = writtenCount;
  }
}