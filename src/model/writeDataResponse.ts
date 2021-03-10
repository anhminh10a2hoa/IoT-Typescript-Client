import WriteResult from "./writeResult";

export default class WriteDataResponse {
  private writeResults: Array<WriteResult>;
  private totalWritten: number;

  public getWriteResults(): Array<WriteResult> {
    return this.writeResults;
  }

  public setWriteResults(writeResults: Array<WriteResult>): void {
    this.writeResults = writeResults;
  }

  public getTotalWritten(): number {
    return this.totalWritten;
  }

  public setTotalWritten(totalWritten: number): void {
    this.totalWritten = totalWritten;
  }
}