import { useParams } from "react-router-dom"
import React, { useEffect, useState } from "react";
// import arrayProductos from "./json/productos.json"
import ItemDetail from "./ItemDetail"
import { doc, getDoc, getFirestore } from "firebase/firestore";


const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const { id } = useParams()



    //Consulto un documento pasado por ID
    useEffect(() => {

        const db = getFirestore();
        const item = doc(db, 'Items', id);
        getDoc(item).then((snapShot) => {
            if (snapShot.exists()) {
                console.log(snapShot.data())
                setItem({ id: snapShot.id, ...snapShot.data() })
            } else {
                console.log('El producto no existe')
            }
        });




        // const promesa = new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve(arrayProductos.find(item => item.id === parseInt(id)));
        //     }, 2000);
        // });
        // promesa.then((data) => {
        //     setItem(data);
        // })
    }, [id]);


    return (
        <div className="container my-5">
            <ItemDetail item={item} />
        </div>
    )

}

export default ItemDetailContainer