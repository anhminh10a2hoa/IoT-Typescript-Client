import Client from "../src/client";
import Exception from "../src/exception/exception";
import DataNodeRead from "../src/model/dataNodeRead";
import DataNodeReadValue from "../src/model/dataNodeReadValue";
import ProcessValue from "../src/model/processValue";
import { processValueData } from "./data";

const client = new Client("https://my.iot-ticket.com/api/v1/", "", "");
describe('Client test', function() {
  it('Check Connection', async function() {
    expect(await client.checkConnection()).toThrow(Exception);
  })
  it('Check Read Process Value', async function() {
    let newProcessValue: ProcessValue = Object.assign(new ProcessValue(), processValueData);
    for(let dataNodeRead of newProcessValue.getDatanodeReads()) {
      let dataNodeReadCastType = Object.assign(new DataNodeRead(), dataNodeRead)
      expect(dataNodeReadCastType.toString()).toBe("Name: Temperature, Unit: c, DataType: double, Path: MainEngine/Core");
      for(let value of dataNodeReadCastType.getValues()) {
        let valueCastType = Object.assign(new DataNodeReadValue(), value)
        expect(valueCastType.toStringDNRV()).toBe("Value: 60, Timestamp: 1414488510057");
      }
    }
  })
});