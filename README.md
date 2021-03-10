# IoT-Ticket Typescript client

## Table of contents
* [Requirements](#requirements)
* [Installation](#installation)
* [Usage](#usage)
* [API documentation](#api-documentation)

## Requirements
+ Your machine has to have Node, you can download from  [https://nodejs.org/en/](https://nodejs.org/en/)

## Installation
+ Clone the project by using command: 
```batch
git clone https://github.com/anhminh10a2hoa/IoT-Typescript-Client
```
+ After cloning the project, open your terminal and navigate to the root of the project folder location.
+ Install all dependencies used:
```batch
npm install
```
+ Create a file named <b>app.ts</b> in the <b>/src</b> folder.
+ Follow [Usage](#usage) to create your own file before starting the client:
```batch
npm start
```

## Testing
+ The application is using Jest for testing
+ Run testing:
```batch
npm test
```

## Usage

### Account

+ Create your own account at [https://my.iot-ticket.com/Dashboard/](https://my.iot-ticket.com/Dashboard/)

### Registering a device
```typescript
const client = new Client("https://my.iot-ticket.com/api/v1/", "username", "password");

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

client.registerDevice(newDevice);
```

### Get a device
```typescript
const device = await client.getDevice("device_id");
console.log(device.toString());
```

### Get list of devices
```typescript
const listOfDevices = await client.getListDevices(100, 0);
for(let d of listOfDevices.getItems()) {
  let deviceCastType = Object.assign(new Device(), d)
  console.log(deviceCastType.toString());
}
```

### Get list of datanodes
```typescript
const listOfDataNodes = await client.getDataNodeList("device_id", 100, 0);
for(let dn of listOfDataNodes.getItems()) {
  let dataNodeCastType = Object.assign(new DataNode(), dn)
  console.log(dataNodeCastType.toString());
}
```

### Get all quota
```typescript
const quota = await client.getAllQuota();
console.log(quota.toString());
```

### Get device quota
```typescript
const deviceQuota = await client.getDeviceQuota("device_id");
console.log(deviceQuota.toString());
```

### Delete device quota
```typescript
client.deleteDevice("device_id");
```

### Read statistical data
```typescript
const criteria = new StatisticalDataQueryCriteria();
criteria.setDeviceId("device_id")
criteria.setFromdate(1383228800000)
criteria.setTodate(1550831791000)
criteria.setGrouping(Grouping.Year);
criteria.setDatanodes(["Temperature","sensor"]);
criteria.getDatanodes();
criteria.getTodate();

const statisticalData = await client.readStatisticalData(criteria);
for(let statisticalDataRead of statisticalData.getDatanodeReads()) {
  let statisticalDataReadCastType = Object.assign(new StatisticalDataRead(), statisticalDataRead)
  console.log(statisticalDataReadCastType.toString());
  for(let value of statisticalDataReadCastType.getValues()) {
    let valueCastType = Object.assign(new StatisticalDataReadValue(), value)
    console.log(valueCastType.toStringSDRV());
  }
}
```

### Read process data
```typescript
const criteria = new DataQueryCriteria();
criteria.setDeviceId("device_id")
criteria.setFromdate(1383228800000)
criteria.setTodate(1550831791000)
criteria.setDatanodes(["/MainEngine/Core/Temperature"]);

const processData = await client.readProcessData(criteria);
for(let dataNodeRead of processData.getDatanodeReads()) {
  let dataNodeReadCastType = Object.assign(new DataNodeRead(), dataNodeRead)
  console.log(dataNodeReadCastType.toString());
  for(let value of dataNodeReadCastType.getValues()) {
    let valueCastType = Object.assign(new DataNodeReadValue(), value)
    console.log(valueCastType.toStringDNRV());
  }
}
```

### Write process data
```typescript
const dataArray = new Array<DataNodeWriteValue>();
const d1 = new DataNodeWriteValue();
d1.setName("Temperature");
d1.setPath("/MainEngine/Core");
d1.setValue(70);
d1.setTimestampMilliseconds(1414488510057);
d1.setUnit("c");

const d2 = new DataNodeWriteValue();
d2.setName("Latitude");
d2.setPath("/MainEngine/Core");
d2.setValue(63);
d2.setDataType(DataType.LongType);

dataArray.push(d1);
dataArray.push(d2);

client.writeProcessData("device_id", dataArray)
```

## API documentation
+ [https://www.iot-ticket.com/images/Files/IoT-Ticket.com_IoT_API.pdf](https://www.iot-ticket.com/images/Files/IoT-Ticket.com_IoT_API.pdf)