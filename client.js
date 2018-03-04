const net = require("net");

const client = net.createConnection(8080, () => {
  console.log("You're connected!");
});

client.on("data", data => {
  console.log(data.toString());
  const reqDataArr = data.toString().split("\n");
  const reqLine = reqDataArr[0];
  const reqUrl = reqLine.split(" ")[1];
  const date = new Date().toUTCString();
  console.log("ReqData", reqDataArr);
  console.log("ReqUrl", reqUrl);
});

client.on("error", () => {
  console.log("goodbye");
});

client.on("close", () => {
  console.log("Connection closed. See ya, dummy");
});
