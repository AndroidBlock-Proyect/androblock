import React, { useState, useCallback, useEffect } from 'react';
import { WebSocket } from "ws";
import { connec, messages } from "../services/server"
import "./css/new.css"

const NewDevice = () => {

    var Nombre = document.getElementById("usuario") as HTMLInputElement || null;
    var puerto = document.getElementById(" puerto") as HTMLInputElement || null;

    var name = Nombre?.value.toString;
    var port = parseInt(puerto?.value)
    //var resultado = false
    //var message = ""

    var arr = [['nombre', 'puerto'], []];


    function adddevice() {
        for (var i = 0; i < arr.length; i++) {
            if (arr[0][i] == null && arr[1][i] == null) {
                arr[0][i] = Nombre?.value.toString().substring(1);
                arr[1][i] = puerto?.value.toString().substring(1);
                console.log(arr[0][i] + "" + arr[1][i]);
                alert("todos son null")
            }
            else if (arr[0][i] != null || arr[1][i] != null) {
                console.log(arr[0][i] + "" + arr[1][i]);
                alert("hay uno que es nulo revise  la consola, presione F12 y busque donde dice consola ")
            }
        }
        //testdevice(resultado);
        //adding(resultado)

    }

    /*

    function testdevice(resultado: boolean) {
        //test the device
        for (var i = 0; i < 30; i++) {
            if (i == 23) {
                console.log(i, resultado);
                return resultado = true

            }
            else {
                console.log(i, resultado);
            }
        }
    }

    function adding(resultado: boolean) {
        if (resultado === true) {
            alert(" el dispositivo ha dicho!" + message);
        }
        else {
            alert(" el dispositivo no ha respondido revise los datos ingresado");
        }
    }
*/

    return (
        <div>
            <header>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.2/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
                <nav className="navbar">
                    <a href="/">Home</a>
                    <a href="/Devicelist">Dispositivos</a>
                    {/*<a href="/tools">Herramientas</a>*/}
                </nav>
                <br />
                <br />
                <section className="textosheader">
                    <div className="textosheader">
                        <h1>
                            AndroidBlock📵
                        </h1>
                        <br />
                        <br />
                        <img className="banner-icon" src="https://www.comocrearunapaginaweb.com.mx/wp-content/uploads/2022/06/Banner-en-Android_10424.png" alt="" />
                        <br />
                    </div>
                </section>
            </header>

            <div className="list roundBorder">
                <h4 className="titulo">Nuevo Dispositivo</h4>
                <br />
                <div className="container-input">
                    <input type="text" className="input" id="client" placeholder="Nombre Usuario" />
                    <input type="text" className="input" id="port" placeholder="Puerto" />
                </div>
                <br />
                <button className="btn-todo" id="agregar" onClick={adddevice} >Agregar</button>
            </div>
            <br />
            <br />
            <br />
        </div>
    )
}

export default NewDevice;
