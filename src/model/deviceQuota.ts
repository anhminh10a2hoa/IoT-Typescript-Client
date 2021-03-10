export default class DeviceQuota {
  private totalRequestToday: number;
  private maxReadRequestPerDay: number;
  private deviceId: number;
  private storageSize: number;
  private numberOfDataNodes: number;

  public getTotalRequestToday(): number {
    return this.totalRequestToday;
  }

  public setTotalRequestToday(totalRequestToday: number): void {
    this.totalRequestToday = totalRequestToday;
  }

  public getMaxReadRequestPerDay(): number {
    return this.maxReadRequestPerDay;
  }

  public setMaxReadRequestPerDay(maxReadRequestPerDay: number): void {
    this.maxReadRequestPerDay = maxReadRequestPerDay;
  }

  public getDeviceId(): number {
    return this.deviceId;
  }

  public setDeviceId(deviceId: number): void {
    this.deviceId = deviceId;
  }

  public getStorageSize(): number {
    return this.storageSize;
  }

  public setStorageSize(storageSize: number): void {
    this.storageSize = storageSize;
  }

  public getNumberOfDataNodes(): number {
    return this.numberOfDataNodes;
  }

  public setNumberOfDataNodes(numberOfDataNodes: number): void {
    this.numberOfDataNodes = numberOfDataNodes;
  }

  public toString(): string {
    return "DeviceQuota{" +
            "totalRequestToday=" + this.totalRequestToday +
            ", maxReadRequestPerDay=" + this.maxReadRequestPerDay +
            ", deviceId='" + this.deviceId + '\'' +
            ", storageSize=" + this.storageSize +
            ", numberOfDataNodes=" + this.numberOfDataNodes +
            '}';
  }
}