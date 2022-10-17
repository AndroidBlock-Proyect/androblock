import { getValue } from "@testing-library/user-event/dist/utils";
import { listenerCount } from "process";
import React, { useEffect, useState } from "react";
import "./css/list.css"

const DeviceList = () => {

    /*
        <div className="list-container">
            <div className="card device-form">
                <div className="card-device">
                    <h1 className="card-list text-center">Dispositivos</h1>
                    <div className="container_list_1">
                        <p className="actividad">Equipos</p>
                        <input type="checkbox" id="id" className="casilla" />
                        <a ></a>
                    </div>
                </div>
            </div>
        </div>  
    */

    // create element with TS

    const list_container = document.createElement("div");
    const Devicelist = document.createElement("div");
    const device = document.createElement("div");
    const list_Title = document.createElement("h1");
    const container_list = document.createElement("div");
    const equipo = document.createElement("p");
    const equipocheck = document.createElement("input");
    const a = document.createElement("a");

    // adding atributes

    list_Title.innerHTML = "Dispositivos";
    list_container.classList.add("device-list");
    Devicelist.classList.add("device-form");
    device.classList.add("card-device");
    container_list.classList.add("container_list_1");
    equipo.innerHTML = "valor del dispositivo";
    equipo.classList.add("actividdad");
    equipocheck.classList.add("casilla");
    equipocheck.setAttribute("type", "checkbox");

    // mostramos todos los campos de dispositivos para la lista
    list_container.appendChild(list_Title);
    list_container.appendChild(Devicelist);
    Devicelist.appendChild(device);
    device.appendChild(container_list);
    container_list.appendChild(equipo);
    container_list.appendChild(equipocheck);

    return (

        <div>

            <header>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.2/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
                <nav className="navbar">
                    <a href="/">Home</a>
                    <a href="/tools">Herramientas</a>
                    <a href="/Newdevice">Nuevo Dispositivo</a>
                </nav>
                <br />
                <br />
                <section className="textosheader">
                    <div className="textosheader">
                        <h1>AndroidBlock📵</h1>
                        <br />
                        <img className="banner-icon" src="https://www.comocrearunapaginaweb.com.mx/wp-content/uploads/2022/06/Banner-en-Android_10424.png" alt="" />
                    </div>
                    <br />
                </section>
            </header>

            <body>

            </body>

        </div>
    )
}

export default DeviceList;


/* const [data, setdata] = useState([]);

 useEffect(() => {
     const ls = localStorage.getItem("devicedata");
     const data = JSON.parse("ls");
     if (data) {
         setdata(data);
     }
 }, []);
*/