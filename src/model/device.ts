import DeviceAttribute from "./deviceAttribute";
export default class Device {

  private name: string;
  private manufacturer: string;
  private type: string;
  private description: string;
  private attributes: Array<DeviceAttribute>;
  private enterpriseId: string;
  private href: URL;
  private deviceId: string;
  private createdAt: Date;
  private enterpriseName: string;

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void{
    if (name.length <= 0 || name.length >= 100) {
      throw new Error('The name is invalid');
    }
    this.name = name;
  }

  public getManufacturer(): string {
    return this.manufacturer;
  }

  public setManufacturer(manufacturer: string): void{
    if (manufacturer.length <= 0 || manufacturer.length >= 100) {
      throw new Error('The manufacturer is invalid');
    }
    this.manufacturer = manufacturer;
  }

  public getType(): string {
    return this.type;
  }

  public setType(type: string): void{
    if (type.length <= 0 || type.length >= 100) {
      throw new Error('The type is invalid');
    }
    this.type = type;
  }

  public getDescription(): string {
    return this.description;
  }

  public setDescription(description: string): void{
    if (description.length <= 0 || description.length >= 100) {
      throw new Error('The description is invalid');
    }
    this.description = description;
  }

  public getAttributes(): Array<DeviceAttribute> {
    return this.attributes;
  }

  public setAttributes(...attributes: Array<DeviceAttribute>): void {
    if(attributes.length > 50) {
      throw new Error('The attributes is invalid');
    }
    this.attributes = attributes;
  }

  public getEnterpriseId(): string {
    return this.enterpriseId;
  }

  public setEnterpriseId(enterpriseId: string): void {
    this.enterpriseId = enterpriseId;
  }

  public getHref(): URL {
    return this.href;
  }

  public setHref(href: URL): void {
    this.href = href;
  }

  public getDeviceId(): string {
    return this.deviceId;
  }

  public setDeviceId(deviceId: string): void {
    this.deviceId = deviceId;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public setCreatedAt(createdAt: Date): void {
    this.createdAt = createdAt;
  }

  public getEnterpriseName(): string {
    return this.enterpriseName;
  }

  public setEnterpriseName(enterpriseName: string): void {
    this.enterpriseName = enterpriseName;
  }

  public toString(): string {
    let res: string = "Device [" + "name=" + this.name + ", " + 
    "manufacturer=" + this.manufacturer + ", " +
    "type=" + this.type  + ", " +
    "description=" + this.description  + ", " +
    "enterpriseId=" + this.enterpriseId  + ", " + 
    "attributes=";
    if (this.attributes) {
      for(let i of this.attributes){
        let att = Object.assign(new DeviceAttribute(), i);
        res += att.toString() + ", ";
      }
    } else {
      res += ", ";
    }
    res += "href=" + this.href  + ", " +
    "deviceId=" + this.deviceId  + ", " +
    "createdAt=" + this.createdAt  + ", " +
    "enterpriseName=" + this.enterpriseName + "]";
    return res;
  }
}