import { DataType } from "./enumType";

export default class DataNodeReadValue {
  private v: string;
  private ts: number = Number.MIN_VALUE;
  private dataType: DataType;

  public getValue(): string {
    return this.v;
  }

  public setValue(v: string): void {
    this.v = v;
  }

  public getTimestampMilliseconds(): number {
    return this.ts;
  }

  public setTimestampMilliseconds(ts: number): void {
    this.ts = ts;
  }

  public setDataType(dataType: DataType): void {
    this.dataType = dataType;
  }

  public convertedValue(): Object {
    if(this.v == null) {
      return null;
    }

    return this.getDataType(this.v);
  }

  private getDataType(value: string): Object {
    switch (value) {
      case DataType.NumberType || DataType.LongType || DataType.BinaryType:
        return +value;
      case DataType.StringType:
        return value;
      case DataType.BooleanType:
        return Boolean(JSON.parse(value));
    }
  }

  public toStringDNRV(): string {
    return "Value: " + this.v + ", Timestamp: " + this.ts;
  }
}