import DataNode from "./dataNodeBase";
import { DataType } from "./enumType";

export default class DataNodeWriteValue extends DataNode {
  private v: string;
  private ts: number;

  public getValue(): string {
    return this.v;
  }

  public setValue(v: any): void {
    if(v == null) {
      this.v = null;
      return;
    }

    if(v instanceof Number){
      this.setNumberValue(v as number);
    } else if(v instanceof Boolean){
      this.setBooleanValue(v as boolean);
    } else {
      this.setInternalValue(v.toString());
    }
  }

  public getTimestampMilliseconds(): number {
    return this.ts;
  }

  public setTimestampMilliseconds(ts: number): void {
    this.ts = ts;
  }

  private setNumberValue(n: number): void {
    this.setDataType(DataType.NumberType);
    this.setInternalValue(n.toString());
  }

  private setBooleanValue(b: boolean): void {
    this.setDataType(DataType.BooleanType);
    this.setInternalValue(b.toString());
  }
    
  private setInternalValue(v: string): void {
    this.v = v;
  }
}