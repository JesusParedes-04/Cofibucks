import React from "react";
import { useParams, Link } from "react-router-dom";

const ThankYouComponent = () => {
    const { id } = useParams()

    return (
        <div className="container">

            <div className="row my-5">
                <div className="col text-center">
                    <div className="alert alert-success" role="alert">

                        <h1>Gracias Por tu Compra</h1>
                        <h8> Tu Número de Orden es : {id} </h8>


                    </div>

                    <Link to={"/"} className="btn btn-warning">Volver a la Página Principal</Link>

                </div>
            </div>
        </div>)


}


export default ThankYouComponent;