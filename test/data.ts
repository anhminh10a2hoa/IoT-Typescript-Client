import DataNodeRead from "../src/model/dataNodeRead";
import ProcessValue from "../src/model/processValue";

const processValueData = {
  href: 'https://my.iot-ticket.com/api/v1/process/read/abc?deviceId=abc&fromdate=1383228800000&todate=1550831791000&datanodes=%2FMainEngine%2FCore%2FTemperature',
  datanodeReads: [
    {
      dataType: 'double',
      unit: 'c',
      name: 'Temperature',
      path: 'MainEngine/Core',
      values: [
        {
          v: "60",
          ts: 1414488510057
        }
      ]
    }
  ]
}

const dataNodeReadData = [{
  dataType: 'double',
  unit: 'c',
  name: 'Temperature',
  path: 'MainEngine/Core',
  values: [
    {
      v: "60",
      ts: 1414488510057
    }
  ]
}]

export const processValue: ProcessValue = Object.assign(new ProcessValue(), processValueData);
export const dataNodeRead: DataNodeRead = Object.assign(new DataNodeRead(), dataNodeReadData);
export const deviceQuotaData = {
  
}