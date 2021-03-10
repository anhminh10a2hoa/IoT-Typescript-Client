import StatisticalDataRead from "./statisticalDataRead";

export default class StatisticalDataValues {
  private href: URL;
  private datanodeReads: Array<StatisticalDataRead>;

  public getHref(): URL {
    return this.href;
  }

  public setHref(href: URL): void {
    this.href = href;
  }

  public getDatanodeReads(): Array<StatisticalDataRead> {
    return this.datanodeReads;
  }
}