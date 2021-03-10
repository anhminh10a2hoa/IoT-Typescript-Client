import axios from 'axios';
import DataNode from './model/dataNode';
import DataNodeWriteValue from './model/dataNodeWriteValue';
import DataQueryCriteria from './model/dataQueryCriteria';
import Device from './model/device';
import DeviceQuota from './model/deviceQuota';
import Enterprise from './model/enterprise';
import PagedResult from './model/pageResult';
import ProcessValue from './model/processValue';
import Quota from './model/quota';
import { StatisticalDataQueryCriteria } from './model/statisticalDataQueryCriteria';  
import StatisticalDataValues from './model/statisticalDataValues';

export default class Client {
  private static DevicesResource: string = "devices/";
  private static DataNodesResource: string = "/datanodes";
  private static WriteDataResource: string = "process/write/";
  private static ReadDataResource: string = "process/read/";
  private static ReadStatisticalDataResource: string = "stat/read/";
  private static RootEnterprisesResource: string = "enterprises/";
  private static QuotaAllResource: string = "quota/all/";
  private static QuotaDeviceResource: string = "quota/";

  private header: Object;
  private serverUrl: string;
  private username: string;
  private password: string;

  constructor(serverUrl: string, username: string, password: string) {
    this.serverUrl = serverUrl;
    this.username = username;
    this.password = password;
    this.header = {'content-type': 'application/json','Authorization': 'Basic ' + Buffer.from(this.username + ":" + this.password).toString('base64')}
  }

  public async checkConnection(): Promise<string> {
    try {
      await axios({
        method: 'get',
        url: this.serverUrl,
        headers: this.header
      });
      return "Connection successful"
    } catch (error) {
      return error.response.data.description;
    }
  }

  public async registerDevice(device: Device): Promise<string> {
    try {
      let res = await axios({
        method: 'post',
        url: this.serverUrl + Client.DevicesResource,
        data: device,
        headers: this.header
      });
      return "Registered device successfully";
    } catch (error) {
      return error.response.data.description;
    }
  }

  public async getDevice(deviceId: string): Promise<Device> {
    try {
      let res = await axios({
        method: 'get',
        url: this.serverUrl + Client.DevicesResource + deviceId,
        headers: this.header
      });
      return Object.assign(new Device(), res.data);
    } catch (error) {
      throw new Error(error.response.data.description);
    }
  }

  public async getListDevices(limit: number, offset: number): Promise<PagedResult<Device>>{
    if(limit > 100) {
      limit = 100;
    }
    try {
      let res = await axios({
        method: 'get',
        params: {
          limit,
          offset
        },
        url: this.serverUrl + Client.DevicesResource,
        headers: this.header
      });
      return Object.assign(new PagedResult<Device>(), res.data);
    } catch (error) {
      throw new Error(error.response.data.description);
    }
  }

  public async getDataNodeList(deviceId: string, limit: number, offset: number): Promise<PagedResult<DataNode>> {
    if(limit > 100) {
      limit = 100;
    }
    console.log(this.serverUrl + Client.DevicesResource + deviceId + Client.DataNodesResource);
    try {
      let res = await axios({
        method: 'get',
        params: {
          limit,
          offset
        },
        url: this.serverUrl + Client.DevicesResource + deviceId + Client.DataNodesResource,
        headers: this.header
      });
      return Object.assign(new PagedResult<DataNode>(), res.data)
    } catch (error) {
      throw new Error(error.response.data.description);
    }
  }

  public async getAllQuota(): Promise<Quota> {
    try {
      let res = await axios({
        method: 'get',
        url: this.serverUrl + Client.QuotaAllResource,
        headers: this.header
      });
      return Object.assign(new Quota(), res.data)
    } catch (error) {
      throw new Error(error.response.data.description);
    }
  }

  public async getDeviceQuota(deviceId: string): Promise<DeviceQuota> {
    try {
      let res = await axios({
        method: 'get',
        url: this.serverUrl + Client.QuotaDeviceResource + deviceId,
        headers: this.header
      });
      return Object.assign(new DeviceQuota(), res.data)
    } catch (error) {
      throw new Error(error.response.data.description);
    }
  }

  public async deleteDevice(deviceId: string): Promise<void> {
    try {
      await axios({
        method: 'delete',
        url: this.serverUrl + Client.DevicesResource + deviceId,
        headers: this.header
      });
      console.log("Delete successfully");
    } catch (error) {
      throw new Error(error.response.data.description);
    }
  }

  public async getRootEnterprise(limit: number, offset: number): Promise<PagedResult<Enterprise>> {
    try {
      let res = await axios({
        method: 'get',
        url: this.serverUrl + Client.RootEnterprisesResource,
        params: {
          limit, offset
        },
        headers: this.header
      });
      return Object.assign(new PagedResult<Enterprise>(), res.data)
    } catch (error) {
      throw new Error(error.response.data.description);
    }
  }

  public async readProcessData(criteria: DataQueryCriteria): Promise<ProcessValue> {
    try {
      let res = await axios({
        method: 'get',
        url: this.serverUrl + Client.ReadDataResource + criteria.getDeviceId(),
        params: criteria,
        headers: this.header
      })
      console.log(res.data);
      return Object.assign(new ProcessValue(), res.data)
    } catch (error) {
      throw new Error(error.response.data.description);
    }
  }

  public async writeProcessData(deviceId: string, data: Array<DataNodeWriteValue>): Promise<string> {
    try {
      let res = await axios({
        method: 'post',
        url: this.serverUrl + Client.WriteDataResource + deviceId,
        data: data,
        headers: this.header
      })
      return "Write successfully";
    } catch (error) {
      throw new Error(error.response.data.description);
    }
  }

  public async readStatisticalData(criteria: StatisticalDataQueryCriteria): Promise<StatisticalDataValues>{
    try {
      let res = await axios({
        method: 'get',
        url: this.serverUrl + Client.ReadStatisticalDataResource + criteria.getDeviceId(),
        params: criteria,
        headers: this.header
      })
      return Object.assign(new StatisticalDataValues(), res.data) 
    } catch (error) {
      throw new Error(error.response.data.description);
    }
  }
}