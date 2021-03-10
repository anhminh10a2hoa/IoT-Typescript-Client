import DataNodeBase from "./dataNodeBase";
import DataNodeReadValue from "./dataNodeReadValue";

export default class DataNodeRead extends DataNodeBase {
  private values: Array<DataNodeReadValue> = new Array<DataNodeReadValue>();

  public getValues(): Array<DataNodeReadValue> {
    return this.values;
  }

  public toStringDNR(): string {
    return this.toString();
  }
}