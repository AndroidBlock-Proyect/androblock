import { listenerCount } from "process";
import React, { useEffect, useState } from "react";
import "./css/list.css"

const DeviceList = () => {
  /*  var i = 0;
    var list  = localStorage.getItem("devicedata");
    function getDeviceList() {
        var x =  document.getElementById('id') as HTMLInputElement | null;
        for (var i = 0; i < 10; i++){
            x?.setAttribute = list[i];
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

                <div className="list-container">
                    <div className="card device-form">
                        <div className="card-device">
                            <h1 className="card-list text-center">Dispositivos</h1>
                            <div className="container-list-1">
                                <input type="checkbox" className="casilla" />
                                <p className="actividad">Equipos</p>
                                <a id="id"></a>
                            </div>
                        </div>
                    </div>
                </div>

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