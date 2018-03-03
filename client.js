const net = require("net");

const client = net.createConnection(8080, () => {
  console.log("You're connected!");
});

client.on("data", data => {
  console.log(data.toString());
});

client.on("error", () => {
  console.log("goodbye");
});

client.on("close", () => {
  console.log("Connection closed. See ya, dummy");
});
