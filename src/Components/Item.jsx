import React from "react";
import {Link} from "react-router-dom"


const Item = ({ item }) => {

    return (
        <div className="col-md-4">
        <Link to ={"/item/" + item.id} className="text-dark text-decoration-none">
                <div className="card text-center border border-0" >
                    <img src={item.Imagen} className="card-img-top img-fluid" alt={item.nombre} />
                    <div className="card-body">
                        <p className="card-text"> <b className="fs-5 text-uppercase">{item.nombre}</b></p>
                    </div>
                </div>
        </Link>
        </div >
    )

}

export default Item