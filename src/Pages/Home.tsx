/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import "./css/home.css"
import { useNavigate } from "react-router-dom";


type State = {
    email: string;
    password: string;
};


var navigate = useNavigate()
const handleBack = () => {
    navigate('devicelist');
};


export default class Home extends React.Component {

    state = {
        email: "",
        password: "",
    };

    // typing on RIGHT hand side of =
    onemail = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({ email: e.currentTarget.value, });
    };

    // typing on RIGHT hand side of =
    onpass = (h: React.FormEvent<HTMLInputElement>): void => {
        this.setState({ password: h.currentTarget.value, });
    };

    render(): JSX.Element {
        //let navigate = useNavigate();

        const auth = () => {
            let usr = this.state.email.toString()
            let psw = this.state.password.toString()

            if (usr == "admin" && psw == "Admin") {
                alert("Login correcto!");
                handleBack();
            }
            else {
                alert("Please enter the correct user name or password ");
            }
            //alert(this.state.email + ":" + this.state.password + ":" + usr)
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
                            <form >
                                <div className="input-box">
                                    <input
                                        id="Usuario"
                                        type="text"
                                        placeholder="Usuario"
                                        className="input-control"
                                        value={this.state.email}
                                        onChange={this.onemail} />
                                </div>
                                <div className="input-box">
                                    <input
                                        id=" Contrasena"
                                        type="password"
                                        placeholder="Contraseña"
                                        className="input-control"
                                        value={this.state.password}
                                        onChange={this.onpass} />
                                </div>
                                <br />
                                <br />
                                <button id="submit" onClick={auth} className="btn">Acceder</button>
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
}