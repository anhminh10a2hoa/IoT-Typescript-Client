export default class DataPathUtil {
  public static getFullPath(dataNodeName: string, dataNodePath: string): string {
    if(dataNodeName == null) {
      throw new Error("Data node can not be null");
    } 
    if(dataNodePath == null) {
      return "/" + dataNodeName;
    }
    return "/" + dataNodePath + "/" + dataNodeName;
  }
}