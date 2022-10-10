import { connect } from "http2";
import React from "react";
import { conectdevice, connec, closeconnection, blockdevice, } from "../services/server";

const Tools = () => {

    function discconect() {
        closeconnection();
    }
/*
    async function conectdev()``: Promise<void> {
        //aqui va la funcion para esperar la connexion al cliente
        connec(port);
    }
*/
    return (
        <body>
            <header>
                <nav>
                    <a href="/">Pagina Principal</a>
                    <a href="/Devicelist">Lista de Dispositivos</a>
                    <a href="/Newdevice">Nuevo Disposivo</a>
                </nav>
                <section className="textosheader">
                    <div className="textosheader">
                        <h1>
                            AndroidBlock📵 - Herramientas
                        </h1>
                        <br />
                        <img src="https://www.comocrearunapaginaweb.com.mx/wp-content/uploads/2022/06/Banner-en-Android_10424.png" alt="" />
                    </div>
                </section>
            </header>
        </body>
    )
}

export default Tools;