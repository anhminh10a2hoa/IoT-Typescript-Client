export default class StatisticalDataReadValue {
  private min: number;
  private max: number;
  private avg: number;
  private count: number;
  private sum: number;
  private ts: number;

  public getMin(): number {
    return this.min;
  }

  public setMin(min: number): void {
    this.min = min;
  }

  public getMax(): number {
    return this.max;
  }

  public setMax(max: number): void {
    this.max = max;
  }

  public getAvg(): number {
    return this.avg;
  }

  public setAvg(avg: number): void {
    this.avg = avg;
  }

  public getCount(): number {
    return this.count;
  }

  public setCount(count: number): void {
    this.count = count;
  }

  public getSum(): number {
    return this.sum;
  }

  public setSum(sum: number): void {
    this.sum = sum;
  }

  public getTs(): number {
    return this.ts;
  }

  public setTs(ts: number): void {
    this.ts = ts;
  }

  public toStringSDRV(): string {
    return "Count: " + this.count + ", Sum: " + this.sum + ", Timestamp: " + this.ts + ", Minimum: " + this.min + ", Maximum: " + this.max + ", Avg: " + this.avg;
  }
}