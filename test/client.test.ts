import Client from "../src/client";
import Device from "../src/model/device";
import DeviceAttribute from "../src/model/deviceAttribute";

const client = new Client("https://my.iot-ticket.com/api/v1/", "", "");
describe('Client test', function() {
  it('Check Connection', async function() {
    let result = await client.checkConnection();
    expect(result).toBe("Provide a valid authorization credential"); 
  })
});