import React from "react";
import "./css/home.css"


const Home = () => {
    return(
    
       <body>
        <header>
            <nav>
                <a href="/Devicelist">Lista de Disposivos</a>
                <a href="/tools">Herramientas</a>
                <a href="/Newdevice">Nuevo Disposivo</a>
            </nav>
            <section className= "textosheader">
                <div className="textosheader">
                    <h1>
                        AndroidBlock📵 - Pagina Principal
                    </h1>
                    <br/>
                    <img src="https://www.comocrearunapaginaweb.com.mx/wp-content/uploads/2022/06/Banner-en-Android_10424.png" alt="" />
                </div>
            </section>
        </header>



       </body>
    )
}

export default Home;