// let rd = require("../node_modules/electron").ipcRenderer;
import { ipcRenderer as ipc } from "electron";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
ipc.on("mainReadyAck", function(event, args) {
  console.log("event received", args);
  //   processResponse(response);
});
ipc.send("ready", "ping");

ReactDOM.render(<App />, document.getElementById("root"));
