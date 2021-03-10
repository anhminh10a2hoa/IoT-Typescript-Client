import { DataType } from "./enumType";

export default class DataNodeBase {
  private name: string;
  private unit: string;
  private dataType: DataType;
  private path: string;

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getUnit(): string {
    return this.unit;
  }

  public setUnit(unit: string): void {
    this.unit = unit;
  }

  public getDataType(): DataType {
    return this.dataType;
  }

  public setDataType(dataType: DataType): void {
    this.dataType = dataType;
  }

  public getPath(): string {
    return this.path;
  }

  public setPath(path: string): void {
    this.path = path;
  }

  public toString(): string {
    return "Name: " + this.name + ", Unit: " + this.unit +
           ", DataType: " + this.dataType +
           ", Path: " + this.path;
  }
}