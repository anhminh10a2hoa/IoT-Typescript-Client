import Client from "../src/client";
import * as dotenv from "dotenv";
import Exception from "../src/exception/exception";
import DataNodeRead from "../src/model/dataNodeRead";
import DataNodeReadValue from "../src/model/dataNodeReadValue";
import { processValue } from "./data";
import DataQueryCriteria from "../src/model/dataQueryCriteria";
import DataNodeWriteValue from "../src/model/dataNodeWriteValue";

dotenv.config();

describe('Client test false', function() {
  const client = new Client("https://my.iot-ticket.com/api/v1/", "", "");
  it('Connection false',  function() {
    expect(async () => await client.checkConnection()).rejects.toEqual(new Exception(401, "Provide a valid authorization credential"));
  })
  it('Check Read Process Value', async function() {
    for(let dataNodeRead of processValue.getDatanodeReads()) {
      let dataNodeReadCastType = Object.assign(new DataNodeRead(), dataNodeRead)
      expect(dataNodeReadCastType.toString()).toBe("Name: Temperature, Unit: c, DataType: double, Path: MainEngine/Core");
      for(let value of dataNodeReadCastType.getValues()) {
        let valueCastType = Object.assign(new DataNodeReadValue(), value)
        expect(valueCastType.toStringDNRV()).toBe("Value: 60, Timestamp: 1414488510057");
      }
    }
  })
});

if(process.env.USERNAME_TICKET && process.env.PASSWORD_TICKET) {
  const client = new Client("https://my.iot-ticket.com/api/v1/", process.env.USERNAME_TICKET, process.env.PASSWORD_TICKET);
  describe('Client test success', function() {
    it('Connection false', async function() {
      expect(await client.checkConnection()).toEqual("Connection successful");
    })
    it('Check Read Process Value', async function() {
      for(let dataNodeRead of processValue.getDatanodeReads()) {
        let dataNodeReadCastType = Object.assign(new DataNodeRead(), dataNodeRead)
        expect(dataNodeReadCastType.toString()).toBe("Name: Temperature, Unit: c, DataType: double, Path: MainEngine/Core");
        for(let value of dataNodeReadCastType.getValues()) {
          let valueCastType = Object.assign(new DataNodeReadValue(), value)
          expect(valueCastType.toStringDNRV()).toBe("Value: 60, Timestamp: 1414488510057");
        }
      }
    })
    it('Check get device by id',  function() {
      expect(async () => await client.getDevice("abcdegf123456")).rejects.toEqual(new Exception(403, "Re-check device id and ensure device access is valid"));
    })
    it('Check get list of devices 1', async function() {
      const listOfDevices = await client.getListDevices(190, 0);
      expect(listOfDevices.getLimit()).toEqual(100);
      expect(listOfDevices.getOffset()).toEqual(0);
    })
    it('Check get list of devices 2', async function() {
      const listOfDevices = await client.getListDevices(70, 0);
      expect(listOfDevices.getLimit()).toEqual(70);
      expect(listOfDevices.getOffset()).toEqual(0);
    })
    it('Check get data node list false', function() {
      expect(async () => await client.getDataNodeList("abcdegf123456", 100, 0)).rejects.toEqual(new Exception(403, "Re-check device id and ensure device access is valid"));
    })
    it('Check Get device quota false', function() {
      expect(async () => await client.getDeviceQuota("abcdegf123456")).rejects.toEqual(new Exception(403, "Re-check device id and ensure device access is valid"));
    })
    it('Check delete device false', function() {
      expect(async () => await client.deleteDevice("abcdegf123456")).rejects.toEqual(new Exception(403, "Re-check device id and ensure device access is valid"));
    })
    it('Check Read process data false', function() {
      const criteria = new DataQueryCriteria();
      expect(async () => await client.readProcessData(criteria)).rejects.toEqual(new Exception(403, "The datanode(s) requested couldn't be found. Re-check request and try again"));
    })
    it('Check Write process data false', function() {
      const dataArray = new Array<DataNodeWriteValue>();
      expect(async () => await client.writeProcessData("abcdegf123456", dataArray)).rejects.toEqual(new Exception(403, "Re-check device id and ensure device access is valid"));
    })
  });
}