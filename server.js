const net = require("net");
const { error, helium, hydrogen, index, style } = require("./modules.js");

const server = net.createServer(socket => {
  console.log("somebody connected");
  socket.setEncoding("utf8");
  socket.on("data", data => {
    const reqDataArr = data.toString().split("\n");
    const reqLine = reqDataArr[0];
    const reqUrl = reqLine.split(" ")[1];
    console.log("ReqData", reqDataArr);
    console.log("ReqUrl", reqUrl);

    if (reqUrl === "/") {
      socket.write(`HTTP/1.1 200 OK\n\n${index}`);
      socket.end();
    } else if (reqUrl === "/index.html") {
      socket.write(`HTTP/1.1 200 OK\n\n${index}`);
      socket.end();
    } else if (reqUrl === "/css/styles.css") {
      socket.write(`HTTP/1.1 200 OK\n\n${style}`);
      socket.end();
    } else if (reqUrl === "/hydrogen.html") {
      socket.write(`HTTP/1.1 200 OK\n\n${hydrogen}`);
      socket.end();
    } else if (reqUrl === "/helium.html") {
      socket.write(`HTTP/1.1  200 OK\n\n${helium}`);
      socket.end();
    } else if (reqUrl === "/404.html") {
      socket.write(`HTTP/1.1 200 OK\n\n${error}`);
      socket.end();
    }
  });
});

server.listen(8080, () => {
  console.log(`Server started on port 8080`);
});
