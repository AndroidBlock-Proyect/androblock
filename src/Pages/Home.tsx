import React from "react";
import "./css/home.css"
import DeviceList from "./Devicelist";
import { useNavigate } from "react-router-dom";
import { Router } from "react-router-dom";



export default function Home() {

    var usuario = document.getElementById("user") as HTMLInputElement;
    var pass = document.getElementById("pswd") as HTMLInputElement;
    var ok = document.getElementById("submit");

    const password = pass?.value;
    const usr = usuario?.value;

    let navigate = useNavigate();
    const handleBack = () => {
        navigate('devicelist');
    };

    //ok?.addEventListener('click', verificacion)

    function verificacion() {
        if (usuario?.value === usr && pass?.value === usr) {
            handleBack();
        }

        else {
            alert("no funciona" + usuario?.value + pass?.value);
        }
    }


    return (

        <div>

            <header>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.2/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
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

            <body>
                <div className="global-container">
                    <div className="card login-form">
                        <div className="card-body">
                            <h1 className="card-title text-center">Acceso AB</h1>
                        </div>
                        <div className="card-text">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputUser1">Usuario</label>
                                    <input type="user" id="user" className="form-control form-control-sm" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Contraseña</label>
                                    <input type="password" id="pswd" className="form-control form-control-sm" />
                                </div>
                                <button id="submit" className="btn btn-primary btn-block" onClick={verificacion}>
                                    Acceder
                                </button>

                            </form>
                        </div>
                    </div>
                </div>

            </body>


        </div>
    )
}