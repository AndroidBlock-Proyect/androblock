import { getValue } from "@testing-library/user-event/dist/utils";
import { listenerCount } from "process";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/list.css"

function DeviceList() {
    const [list, setlist] = useState(0)

    useEffect(() => {
        //importing the table variable 
        var tabla = document.getElementById('tabla')

        // creating variables
        var identification;
        var array = [localStorage.getItem('cliente')];
        var ar = [localStorage.getItem('ports')];
        var list = array.length


        // creating the loop for fill_table
        //array.forEach(fill_table)
        //function fill_table() {
        for (var i = 0; i < array.length; i++) {

            //variable

            //creating Html Elemnts
            var el = document.createElement('tr');
            var cliente = document.createElement('td') as HTMLElement;
            var accion = document.createElement('td') as HTMLElement;
            var btn = document.createElement('Button');

            //tr style
            el.style.backgroundColor = 'white';
            el.style.color = 'black';
            el.style.fontSize = '18px'
            el.style.borderBottom = '1px solid #bbb';
            el.style.width = '100%';
            el.style.height = '5vmin';
            el.style.borderRadius = '20px';

            //td style
            cliente.style.textAlign = 'center';

            //btn style
            btn.style.backgroundColor = 'aliceblue';
            btn.style.width = '100%';
            btn.style.height = '100%';

            //test
            console.log(list);

            // adding to clientes
            cliente.innerHTML = '' + array[i];

            //adding id to button
            var data = ar[i]?.toString()
            btn.id = data + " "
            btn.innerHTML = 'Administrar'

            //setting button function
            btn.onclick = print

            //append 
            accion.appendChild(btn)
            el?.appendChild(cliente)
            el?.appendChild(accion)
            tabla?.appendChild(el);
        }

        // this function is the brigge to chech the avabiality of the device and nav to the tool page
        function print() {
            handleBack()
            console.log(btn.id);
            //return btn.id;
        }
        //}
    })

    // nav to the tool page
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
                                <tr >
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