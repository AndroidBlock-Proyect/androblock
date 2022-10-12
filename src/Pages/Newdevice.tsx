import React, { useState, useCallback, useEffect } from 'react';
import { WebSocket } from "ws";
import { connec, messages } from "../services/server"
import { setport } from './res/imports';
import "./css/new.css"

const NewDevice = () => {

    //const [devicedata] = useState([]);

    var devport = document.getElementById("port") as HTMLInputElement;
    var cliente = document.getElementById("client") as HTMLInputElement;
    //var agregar = document.getElementById("agregar");

    var msg = "New device connected to port " + devport?.value;
    var duration;

    localStorage.setItem("port:", devport?.value);

    function test() {
        alert("port" + localStorage.getItem("port"));
    }

    //var port: number = parseInt(devport?.value, 10);

    /*function conect() {
        console.log("Connected to port " + devport?.value);
        setport(devport?.value);

        //savedata();
        console.log(localStorage.getItem("port" + "cliente"));

        do {

        }
        while (1 == 1) {
            console.log("Connected to port " + devport?.value);
            savedata();
        }
    }

    //funcion para enviar los datos del telefono al localstorage

    function savedata() {
        useEffect(() => {
            localStorage.setItem("devicedata", JSON.stringify("port:" + devport?.value + ";" + "cliente:" + cliente?.value + ";"));

        }, [devicedata]);
    }*/

    return (

        <div>

            <header>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.2/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
                <nav>
                    <a href="/">Home</a>
                    <a href="/Devicelist">Dispositivos</a>
                    <a href="/tools">Herramientas</a>
                </nav>
                <br />
                <section className="textosheader">
                    <div className="textosheader">
                        <h1>
                            AndroidBlock📵
                        </h1>
                        <br />
                        <img src="https://www.comocrearunapaginaweb.com.mx/wp-content/uploads/2022/06/Banner-en-Android_10424.png" alt="" />
                        <br />
                    </div>
                </section>
            </header>
            <br />

            <body>

                <div className="list roundBorder">
                    <h4 className="titulo">Nuevo Dispositivo</h4>
                    <br />
                    <div className="container-input">
                        <input type="text" className="input" id="client" placeholder="Nombre Cliente" />
                        <input type="text" className="input" id="port" placeholder="Puerto" />
                    </div>
                    <button className="btn-todo" id="agregar" onClick={test} >Agregar</button>
                </div>

            </body>

        </div>
    )
}

export default NewDevice;


/*
    //alert to show connecting 
    function tempalert(msg: string | undefined, duration: number | undefined) {
        var el = document.getElementById("div");
        el?.setAttribute("style", "position:absolute; top:40%; left20%; bacckground-color:white;");
        setTimeout(function () {
            el?.parentNode?.removeChild(el);
        }, duration);
        //document.body.appendChild(el)
    }
 */