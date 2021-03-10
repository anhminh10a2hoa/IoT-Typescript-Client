import { Order } from "./enumType";

export default class DataQueryCriteria {
  private deviceId: string;
  private order: Order;
  private limit: number;
  private fromdate: number | Date;
  private todate: number | Date;
  private datanodes: string;

  public getDeviceId(): string {
    return this.deviceId;
  }

  public setDeviceId(deviceId: string): void {
    this.deviceId = deviceId;
  }

  public getOrder(): Order {
    return this.order;
  }

  public setOrder(order: Order): void {
    this.order = order;
  }

  public getLimit(): number {
    return this.limit;
  }

  public setLimit(limit: number): void {
    this.limit = limit;
  }

  public getFromdate(): number | Date {
    return this.fromdate;
  }

  public setFromdate(fromdate: number | Date): void {
    this.fromdate = fromdate;
  }

  public getTodate(): number | Date {
    return this.todate;
  }

  public setTodate(todate: number | Date): void {
    this.todate = todate;
  }

  public getDatanodes(): string {
    return this.datanodes;
  }

  public setDatanodes(datanodes: Array<String>): void {
    if(datanodes.length === 0) {
      throw new Error("At least one data point needs to be defined");
    }
    this.datanodes = datanodes.join(',');
  }
}