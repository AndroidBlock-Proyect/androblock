import React from "react";
import { WebSocket } from "ws";
import server from "../services/server"

const NewDevice = () => {
    
    let puerto = document.getElementById('puerto');
    let dueo = document.getElementById('dueo');
    let id = Math.random();

    //funcion para enviar los datos del telefono al archivo .androblock
    return(
        <body>
            <header>
            <nav>
                <a href="/">Pagina Principal</a>
                <a href="/Devicelist">Lista de Dispositivos</a>
                <a href="/tools">Herramientas</a>
                
            </nav>
            <section className= "textosheader">
                <div className="textosheader">
                    <h1>
                        AndroidBlock📵 - Nuevo Dispositivo
                    </h1>
                    <br/>
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