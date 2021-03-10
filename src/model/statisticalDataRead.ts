import DataNodeBase from "./dataNodeBase";
import StatisticalDataReadValue from "./statisticalDataReadValue";

export default class StatisticalDataRead extends DataNodeBase {
  private values: Array<StatisticalDataReadValue>;

  public getValues(): Array<StatisticalDataReadValue> {
    return this.values;
  }

  public setValues(values: Array<StatisticalDataReadValue>): void {
    this.values = values;
  }
}