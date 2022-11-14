//import { connect } from 'http2';
import { connect } from 'net';
import React, { useState, useCallback, useEffect } from 'react';
import { setTimeout } from 'timers/promises';
//import { WebSocket } from "ws";
import { connec, messages } from "../services/server"
import "./css/new.css"

type State = {
    nombre: String,
    Puerto: Number,
}
export default class NewDevice extends React.Component {


    state = {
        nombre: "",
        Puerto: "",
    }


    onport = (p: React.FormEvent<HTMLInputElement>): void => {
        this.setState({ Puerto: p.currentTarget.value });
    }

    onname = (n: React.FormEvent<HTMLInputElement>): void => {
        this.setState({ nombre: n.currentTarget.value });
    }

    render(): React.ReactNode {
        var conn = false;
        var name = this.state.nombre.toString();
        var port = this.state.Puerto.toString();
        var pot = parseInt(this.state.Puerto)
        //var resultado = false
        //var message = ""

        var arr = [['nombre', 'puerto'], []];
        var conectionTimeout

        function adddevice() {
            //try {
            testDevice(name, pot);
            //}
            //catch (err) {
            //  alert("no se pudo conectar con el telefono");
            //}
            /*for (var i = 0; i < arr.length; i++) {
                if (arr[0][i] == null || arr[1][i] == null) {
                    arr[0][i] = name;
                    arr[1][i] = port;
                    console.log(arr[0][i] + ":  :" + arr[1][i]);
                    alert("todos son null" + ": se estaran agregando los siguientes elementos:  " + " nombre:" + name + "  puerto: " + port)
                }
            }*/
            //testdevice(resultado);
            //adding(resultado)

        }

        const testDevice = (nombre: string, puerto: number) => {
            //var pot = parseInt(this.state.Puerto)
            console.log("tamoaqui: " + nombre + "  " + puerto)
            connec(nombre, puerto)
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
                        <input
                            type="text"
                            className="input"
                            id="client"
                            placeholder="Nombre Usuario"
                            value={this.state.nombre}
                            onChange={this.onname}
                        />*
                        <input
                            type="text"
                            className="input"
                            id="port"
                            placeholder="Puerto"
                            value={this.state.Puerto}
                            onChange={this.onport}
                        />
                    </div>
                    <br />
                    <button className="btn-todo" id="agregar" onClick={adddevice} >Agregar</button>
                </div>
                <br />
                <br />
            </div>
        )
    }
}

