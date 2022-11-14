//import { useCallback } from "react";
import { WebSocket } from "ws";

//var port: number = parseInt(setport, 10);



export function connec(name: string, port: number) {
  const ws = new WebSocket('ws://localhost:' + port);
  console.log("aqui tamo");

  ws.on('message', (data) => {
    if (data !== undefined && data !== null) {
      alert(' el dispositivo respondio correctamente');
      console.log("hola")
      ws.send('el usuario: ' + name + ',  se ha conectado en el puerto: ' + port);
    }
    else {
      alert(" el dispositivo no ha respondido revise los datos ingresado");
    }
  });
}

export function messages(msg: any, port: number) {
  const ws = new WebSocket('ws://localhost:' + port);
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
