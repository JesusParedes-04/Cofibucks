import React from "react";
import Item from "./Item";



const ItemList = ({ items }) => {

    return (

        <div className="row container-sm">

        <h1 className="text-center text-uppercase my-5 tittle-products">Nuestros Productos</h1>

            {
                items.map(item => <Item key={item.id} item={item} />)
            }
        </div>
    )

}

export default ItemList