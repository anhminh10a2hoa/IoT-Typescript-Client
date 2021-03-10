export default class Enterprise {
  private url: URL;
  private name: string;
  private resourceId: string;
  private hasSubEnterprises: boolean;

  public getUrl(): URL {
    return this.url;
  }

  public setUrl(url: URL): void {
    this.url = url;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getResourceId(): string {
    return this.resourceId;
  }

  public setResourceId(resourceId: string): void {
    this.resourceId = resourceId;
  }

  public isHasSubEnterprises(): boolean {
    return this.hasSubEnterprises;
  }

  public setHasSubEnterprises(hasSubEnterprises: boolean): void {
    this.hasSubEnterprises = hasSubEnterprises;
  }
}