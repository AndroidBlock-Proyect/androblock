import React, { useState, useCallback, useEffect } from 'react';
import { WebSocket } from "ws";
import { connec, messages } from "../services/server"
import useWebSocket, { ReadyState } from 'react-use-websocket';

const NewDevice = () => {




    var devport = document.getElementById("port") as HTMLInputElement;
    var msg;
    var duration;

    function conect() {
        var port = devport?.value;
        connec(port);
        messages(port);
        //tempalert("conectando", 5000);
    }

    //alert to show connecting 
    function tempalert(msg: string | undefined, duration: number | undefined) {
        var el = document.getElementById("div");
        el?.setAttribute("style", "position:absolute; top:40%; left20%; bacckground-color:white;");
        setTimeout(function () {
            el?.parentNode?.removeChild(el);
        }, duration);
        //document.body.appendChild(el)
    }

    //funcion para enviar los datos del telefono al archivo .androblock

    function savedata() {

    }

    return (
        <body>
            <header>
                <nav>
                    <a href="/">Pagina Principal</a>
                    <a href="/Devicelist">Lista de Dispositivos</a>
                    <a href="/tools">Herramientas</a>

                </nav>
                <section className="textosheader">
                    <div className="textosheader">
                        <h1>
                            AndroidBlock📵 - Nuevo Dispositivo
                        </h1>
                        <br />
                        <img src="https://www.comocrearunapaginaweb.com.mx/wp-content/uploads/2022/06/Banner-en-Android_10424.png" alt="" />
                    </div>
                    <div>
                        <h1>ingrese el nombre del due;o</h1>
                        <input id="dueo"></input>
                        <h1> ingrese el Puerto aqui </h1>
                        <input id="port"></input>
                    </div>
                </section>
            </header>
        </body>
    )
}

export default NewDevice;