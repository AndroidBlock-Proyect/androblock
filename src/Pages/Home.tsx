import React from "react";
import "./css/home.css"
import DeviceList from "./Devicelist";
import { useNavigate } from "react-router-dom";
import { Router } from "react-router-dom";



export default function Home() {

    var tokenhistory;

    var usuario = document.getElementById("user") as HTMLInputElement;
    var pass = document.getElementById("pswd") as HTMLInputElement;
    var ok = document.getElementById("submit");

    //const pswd = '1234';
    //const usr = 'Adm';

    let navigate = useNavigate();
    const handleBack = () => {
        navigate('devicelist');
    };

    //ok?.addEventListener('click', verificacion)

    function verificacion() {
        if (usuario?.value === '' && pass?.value === '') {

            tokenhistory = Math.random().toString().substring(2)
            console.log(tokenhistory);
            handleBack();
        }

        else {
            alert("no funciona " + usuario?.value + " "+ pass?.value);
        }
    }


    return (

        <div>
            <header>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.2/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
                <br />
                <br />
                <section className="textosheader">
                    <div className="textosheader">
                        <h1>
                            AndroidBlock📵
                        </h1>
                        <br />
                        <img className="banner-icon" src="https://www.comocrearunapaginaweb.com.mx/wp-content/uploads/2022/06/Banner-en-Android_10424.png" alt="" />
                        <br />
                    </div>
                </section>
            </header>

            <section className="form-main">
                <div className="form-content">
                    <div className="box">
                        <h3>Inicio AndroidBlock</h3>
                        <form action="">
                            <div className="input-box">
                                <input id="user" type="text" placeholder="Usuario" className="input-control" />
                            </div>
                            <div className="input-box">
                                <input id="pswd" type="password" placeholder="Contraseña" className="input-control" />
                            </div>
                            <br />
                            <br />
                            <button id="submit" className="btn" onClick={verificacion}>Acceder</button>
                        </form>
                    </div>
                </div>
            </section>
            <br />
            <br />
            <br />
        </div>
    )
}