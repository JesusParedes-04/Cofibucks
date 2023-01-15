import React from "react";
import {Link} from "react-router-dom"


const Item = ({ item }) => {

    return (
        <div className="col-md-4">
        <Link to ={"/item/" + item.id} className="text-dark text-decoration-none">
                <div className="text-center mt-5 rounded-3" >
                    <img src={item.Imagen} className="card-img-top img-fluid" alt={item.nombre} />
                    <div>
                        <p className="card-text mt-4 bg-greenList rounded-3"> <b className="fs-5 text-uppercase">{item.nombre}</b></p>
                    </div>
                </div>
        </Link>
        </div >
    )

}

export default Item