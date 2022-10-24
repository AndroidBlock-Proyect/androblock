import { getValue } from "@testing-library/user-event/dist/utils";
import { listenerCount } from "process";
import React, { useEffect, useState } from "react";
import "./css/list.css"

/*
async function DatosGet(url: string) {
    let datos = await fetch(url).then(res => res.json).then((data => { return data }))
}*/

function DeviceList() {
    const [list, setlist] = useState(0)

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
    /*
        let macho = document.getElementById('macho');
        let fen = document.getElementById('fen');
    
        let list = document.getElementById('devls');
    
        var array = ['f', 'm', 'f', 'm', 'f', 'm', 'f', 'm', 'f', 'm', 'f', 'm', 'f', 'm', 'f', 'm', 'f', 'm', 'f', 'm', 'f', 'm']
        window.onload = () => {
            console.log('window.onload');
            let div = document.createElement('div');
            array.forEach(g => {
                let btn = document.createElement('button');
                if (g === 'f') {
                    console.log('femenino: ' + g);
                    btn.innerHTML = (g)
                }
                else if (g === 'm') {
                    console.log('masculino: ' + g);
                    btn.innerHTML = (g)
    
                }
                list?.appendChild(div);
                div.appendChild(btn);
    
            });
        }*/
    //window.onerror = () => {

    useEffect(() => {
        const el = document.createElement('div');

        var lc = document.getElementById('listcontainer')
        var array = ['klk','f', 'm', 'f', 'm', 'f', 'm', 'f', 'm', 'f', 'm', 'f', 'm', 'f', 'm', 'f', 'm', 'f', 'm', 'f', 'm', 'f']

        array.forEach(list => {
            //let p = document.createElement('p');'
            console.log(list);
            el.innerHTML = list;
            el.style.backgroundColor = 'salmon';
            el.style.color = 'white';

            lc?.appendChild(el);

        });
    })



    return (

        <div>

            <header>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.2/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
                <nav className="navbar">
                    <a href="/">Home</a>
                    <a href="/Newdevice">Nuevo Dispositivo</a>
                    <a href="/tools">Herramientas</a>
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
                            <div id='listcontainer'>

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