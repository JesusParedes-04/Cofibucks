import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount";



const ItemDetail = ({ item }) => {
    const addItem = useContext(CartContext)
    const [itemStock, setItemStock] = useState(0);

    //Creamos funcion onAdd que tomará el stock del useState (0) y le restará la cantidad(quantity) y lo actualizará con el setitemstock
    const onAdd = (quantity) => {
        setItemStock(itemStock - quantity);
        addItem(item, quantity)
    }


    //Cuando me traiga el producto me debe actualizar mi estado itemstock
    useEffect(() => {

        setItemStock(item.stock)

    }, [item])


    return (

        <div className="row">
            <div className="col-md-4 offset-md-2">
                <img src={item.Imagen} alt={item.nombre} className="img-fluid" />
            </div>

            <div className="col-md-4">
                <h1>{item.nombre}</h1>
                <p>{item.descripcion}</p>
                <p> <b>${item.precio}</b> </p>
                <ItemCount stock={item.stock} onAdd={onAdd} />
            </div>
        </div>
    )

}

export default ItemDetail