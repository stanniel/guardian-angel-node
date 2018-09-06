var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

io.on("connection", socket =>
  socket.on("gps", data => {
    io.emit("gps", data);
  })
);

http.listen(3000, () => console.log("listening on *:3000"));
