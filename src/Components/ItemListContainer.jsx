import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import arrayProductos from "./json/productos.json"
import ItemList from "./ItemList";


const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const { id } = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
            }, 2000);
        });
        promesa.then((data) => {
            setItems(data);
        })
    }, [id])

    return (
        <div className="container">
            <h1 className="text-center bg-success p-4 mb-4 text-light">Catalogo de Productos</h1>
            <ItemList items={items} />
        </div>

    )

}

export default ItemListContainer