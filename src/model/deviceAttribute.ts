export default class DeviceAttribute{
  private key: string;
  private value: string;

  public getKey(): string {
    return this.key;
  }

  public setKey(key: string): void {
    this.key = key;
  }

  public getValue(): string {
    return this.value;
  }

  public setValue(value: string): void {
    this.value = value;
  }

  public toString(): string {
    return "Attribute{" + "key='" + this.key + '\'' + ", value='" + this.value + '\'' + '}';
  }
}