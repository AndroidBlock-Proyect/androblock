import { getValue } from "@testing-library/user-event/dist/utils";
import { listenerCount } from "process";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

        var identidication;

        var el = document.createElement('tr');
        

        var lc = document.getElementById('tabla')
        var array = ['a', 'f', 'm', 'j', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'b', 'c', 'd', 'e', 'g', 'h']

        var list = array.length

        var clien = localStorage.getItem('clie')

        console.log(localStorage.getItem('clie'))

        el.style.backgroundColor = 'white';
        el.style.color = 'black';
        el.style.fontSize = '18px';

        array.forEach(fill_table)

        function fill_table() {
            for (var i = 0; i < 22; i++) {
                var orden = document.createElement('td') as HTMLElement;
                var cliente = document.createElement('td') as HTMLElement;
                var accion = document.createElement('td') as HTMLElement;
                var btn = document.createElement('Button');
                
                console.log(list);
                orden.innerHTML = (list - 1).toString()
                cliente.innerHTML = "hola " + clien?.toString()


                btn.id = array[i++]
                btn.style.backgroundColor = 'aliceblue';
                btn.innerHTML = 'seleccionar'

                btn.onclick = print

                accion.appendChild(btn)

                el?.appendChild(orden)
                el?.appendChild(cliente)
                el?.appendChild(accion)

                lc?.appendChild(el);
            }
            function print() {
                handleBack()
                console.log(btn.id);
                //return btn.id;
            }
        }
    })
    let navigate = useNavigate();
    const handleBack = () => {
        navigate('/tools');
    };



    return (

        <div>

            <header>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.2/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
                <nav className="navbar">
                    <a href="/">Home</a>
                    <a href="/Newdevice">Nuevo Dispositivo</a>
                    {/*<a href="/tools">Herramientas</a>*/}
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

            <div className="list-container">
                <div className="device-form">
                    <div className="card-device">
                        <h1 className="card-list text-center">Dispositivos</h1>
                        <br />
                        <div id='listcontainer'>
                            <table id="tabla">
                                <tr>
                                    <th>orden</th>
                                    <th>cliente</th>
                                    <th>accion</th>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />

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