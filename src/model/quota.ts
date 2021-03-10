export default class Quota {
  private totalDevices: number;
  private maxNumberOfDevices: number;
  private maxDataNodePerDevice: number;
  private usedStorageSize: number;
  private maxStorageSize: number;

  public getTotalDevices(): number {
    return this.totalDevices;
  }

  public setTotalDevices(totalDevices: number): void {
    this.totalDevices = totalDevices;
  }

  public getMaxNumberOfDevices(): number {
    return this.maxNumberOfDevices;
  }

  public setMaxNumberOfDevices(maxNumberOfDevices: number): void {
    this.maxNumberOfDevices = maxNumberOfDevices;
  }

  public getMaxDataNodePerDevice(): number {
    return this.maxDataNodePerDevice;
  }

  public setMaxDataNodePerDevice(maxDataNodePerDevice: number): void {
    this.maxDataNodePerDevice = maxDataNodePerDevice;
  }

  public getUsedStorageSize(): number {
    return this.usedStorageSize;
  }

  public setUsedStorageSize(usedStorageSize: number): void {
    this.usedStorageSize = usedStorageSize;
  }

  public getMaxStorageSize(): number {
    return this.maxStorageSize;
  }

  public setMaxStorageSize(maxStorageSize: number): void {
    this.maxStorageSize = maxStorageSize;
  }

  public toString(): string {
    return "Quota{" +
          "totalDevices=" + this.totalDevices +
          ", maxNumberOfDevices=" + this.maxNumberOfDevices +
          ", maxDataNodePerDevice=" + this.maxDataNodePerDevice +
          ", usedStorageSize=" + this.usedStorageSize +
          ", maxStorageSize=" + this.maxStorageSize +
          '}';
  }

}