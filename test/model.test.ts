import Client from "../src/client";
import DataNodeBase from "../src/model/dataNodeBase";
import DataNodeRead from "../src/model/dataNodeRead";
import DataNodeReadValue from "../src/model/dataNodeReadValue";
import Device from "../src/model/device";
import DeviceAttribute from "../src/model/deviceAttribute";
import { DataType } from "../src/model/enumType";
import { processValue, dataNodeRead } from "./data";

describe('Model test', function() {
  it("Device model", async function() {
    const newDevice = new Device();
    newDevice.setName("DeviceName");
    newDevice.setManufacturer("Manufacturer");
    newDevice.setType("DeviceType");
    const d1 = new DeviceAttribute();
    d1.setKey("OS");
    d1.setValue("Windows 7");
    const d2 = new DeviceAttribute();
    d2.setKey("Screensize");
    d2.setValue("1960*1800");
    newDevice.setAttributes(d1, d2);

    expect(newDevice.getName()).toBe("DeviceName");
    expect(newDevice.getManufacturer()).toBe("Manufacturer");
    expect(newDevice.getType()).toBe("DeviceType");
    expect(d1.getKey()).toBe("OS");
    expect(d1.getValue()).toBe("Windows 7");
  })

  it("DataNodeBase model", async function() {
    const newDataNodeBase = new DataNodeBase();
    newDataNodeBase.setName("temperature");
    newDataNodeBase.setUnit("c");
    newDataNodeBase.setDataType(DataType.LongType);
    newDataNodeBase.setPath("/temperature");

    expect(newDataNodeBase.getName()).toBe("temperature");
    expect(newDataNodeBase.getUnit()).toBe("c");
    expect(newDataNodeBase.getDataType()).toBe("long");
    expect(newDataNodeBase.getPath()).toBe("/temperature");
    expect(newDataNodeBase.toString()).toBe("Name: temperature, Unit: c, DataType: long, Path: /temperature");
  })

  it("DataNodeRead model", async function() {
    expect(processValue.getHref()).toBe("https://my.iot-ticket.com/api/v1/process/read/abc?deviceId=abc&fromdate=1383228800000&todate=1550831791000&datanodes=%2FMainEngine%2FCore%2FTemperature");
  })
});