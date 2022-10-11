import { useCallback } from "react";
import { WebSocketServer } from "ws";
import { setport } from "../Pages/res/imports";

//var port: number = parseInt(setport, 10);

const ws = new WebSocketServer();


export function connec() {
  ws.on('connection', (ws) => {
    ws.on('message', (data) => {
      console.log('recbiendo mensaje del cliente :' + data);
    })
  })
}

export function messages(msg: any) {
  ws.on('connection', (ws) => {
    ws.send('klk te habla el servidor! 👌');
  });
}

export function closeconnection() {

}

/*
export function conectdevice() {

}



export function blockdevice() {
  io.on("connection", (Socket) => {
    io.emit("send the block command");
  })
}
*/
