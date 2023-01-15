import React from "react";
import { useParams, Link } from "react-router-dom";

const ThankYouComponent = () => {
    const { id } = useParams()

    return (
        <div className="container">

            <div className="row my-5">
                <div className="col text-center">
                    <div className="relleno rounded-3">

                        <h1 className="text-center">Gracias Por tu Compra</h1>
                        <p className="text-center"> Tu Número de Orden es : </p>
                        <p> <b className="text-center"> {id} </b> </p>
                        
                     


                    </div>

                    <Link to={"/"} className="mt-5 btn btn-success">Volver a la Página Principal</Link>

                </div>
            </div>
        </div>)


}


export default ThankYouComponent;