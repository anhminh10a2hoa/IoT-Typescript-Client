import DataNodeRead from "./dataNodeRead";

export default class ProcessValue {
  private href: URL;
  private datanodeReads: Array<DataNodeRead> = new Array<DataNodeRead>();

  public getHref(): URL {
    return this.href;
  }

  public setHref(href: URL): void {
    this.href = href;
  }

  public getDatanodeReads(): Array<DataNodeRead> {
    return this.datanodeReads;
  }
}