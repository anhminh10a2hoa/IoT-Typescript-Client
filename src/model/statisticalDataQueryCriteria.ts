import { Grouping, Order } from "./enumType";

export class StatisticalDataQueryCriteria {
  private deviceId: string;
  private order: Order;
  private fromdate: number | Date;
  private todate: number | Date;
  private datanodes: string;
  private grouping: Grouping;
  private vtags = new Set<String>();

  public StatisticalDataQueryCriteria(deviceId: string, grouping: Grouping, fromdate: number | Date, todate: number | Date, dataPoints: string[]) {
    this.setDeviceId(deviceId);
    this.setDatanodes(dataPoints);
    this.setGrouping(grouping);
    this.setFromdate(fromdate);
    this.setTodate(todate);
}

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

  public getGrouping(): Grouping {
    return this.grouping;
  }

  public setGrouping(grouping: Grouping): void {
    this.grouping = grouping;
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

  public getVtags(): Set<String> {
    return this.vtags;
  }

  public setVtags(vtags: Set<String>): void {
    this.vtags = vtags;
  }
}