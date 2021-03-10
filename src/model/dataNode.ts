import DataNodeBase from "./dataNodeBase";

export default class DataNode extends DataNodeBase {
  private href: URL;
  
  public getHref(): URL {
    return this.href;
  }

  public setHref(href: URL): void {
    this.href = href;
  }
  
  public toStringDN(): string {
    return "Herf: " + this.href + + "\n" + this.toString();
  }
}