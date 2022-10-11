import React from "react";
import "./css/list.css"



const DeviceList = () => {
    return(

        <div>

            <header>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.2/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto"/>
                <nav>
                    <a href="/">Home</a>
                    <a href="/tools">Herramientas</a>
                    <a href="/Newdevice">Nuevo Disposivo</a>
                </nav>
                <br />
                    <section className= "textosheader">
                        <div className="textosheader">
                            <img src="https://www.comocrearunapaginaweb.com.mx/wp-content/uploads/2022/06/Banner-en-Android_10424.png" alt="" />
                            <br/>
                            <br/>
                            <h1>AndroidBlock📵</h1>
                        </div>
                    </section>
            </header>

            <body>

            <div className="list-container">
                    <div className="card device-form">
                        <div className="card-device">
                            <h1 className="card-list text-center">Dispositivos</h1>
                            <div className="container-list-1">
                            <input type="checkbox" className="casilla"/>
                            <p className="actividad">Equipos</p>
                        </div>
                        </div>
                    </div>
                </div>
        
            </body>

        </div>
    )
}

export default DeviceList;