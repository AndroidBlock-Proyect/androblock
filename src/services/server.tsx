import { info } from "console";
import { Socket } from "dgram";
import { connect } from "http2";
import { Server } from "socket.io";

const io = new Server();


export function connec(port: any) {
  io.on("connection", (Socket) => {
    console.log('estoy funcionando')
    io.emit("el dispositivo:" + port + "se ha conectado correctamente")
    //con = true;
  });
  io.listen(port);
}

export function messages(msg: any) {
  io.on("connection", (Socket) => {
    io.emit("hello", "world", "i'm:" + msg);
    console.log("hello", "world", "i'm:" + msg);
  })
}

export function conectdevice() {
  io.socketsJoin("payzone");
}

export function closeconnection() {
  io.disconnectSockets();

}

export function blockdevice() {
  io.on("connection", (Socket) => {
    io.emit("send the block command");
  })
}

