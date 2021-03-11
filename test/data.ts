export const processValueData = {
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