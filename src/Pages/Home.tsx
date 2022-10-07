import React from "react";
import "./css/home.css"


const Home = () => {
    return(
        
        <div>

            <header>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.2/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto"/>
            <nav>
                <a href="/Devicelist">Dispositivos</a>
                <a href="/tools">Herramientas</a>
                <a href="/Newdevice">Nuevo Disposivo</a>
            </nav>
            <br />
                <section className= "textosheader">
                    <div className="textosheader">
                    <img src="https://www.comocrearunapaginaweb.com.mx/wp-content/uploads/2022/06/Banner-en-Android_10424.png" alt="" />
                    <br/>
                    <br/>
                        <h1>
                            AndroidBlock📵
                        </h1>
                        <br/>
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
                                    <input type="user" className="form-control form-control-sm" id="exampleInputUser1" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Contraseña</label>
                                    <input type="password" className="form-control form-control-sm" id="exampleInputPassword1" />
                                </div>

                                <button type="submit" className="btn btn-primary btn-block">
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
export default Home;