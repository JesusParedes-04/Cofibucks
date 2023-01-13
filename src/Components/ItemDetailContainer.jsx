import { useParams } from "react-router-dom"
import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "./Loading";


const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const { id } = useParams()
    const[loading, setLoading]= useState(true);



    //Consulto un documento pasado por ID
    useEffect(() => {

        const db = getFirestore();
        const item = doc(db, 'Items', id);
        getDoc(item).then((snapShot) => {
            if (snapShot.exists()) {
                console.log(snapShot.data())
                setItem({ id: snapShot.id, ...snapShot.data() })
                setLoading(false)
            } else {
                console.log('El producto no existe')
            }
        });

    }, [id]);


    return (
        <div className="container my-5">
          {loading ? <Loading/> : <ItemDetail item={item} />} 
        </div>
    )

}

export default ItemDetailContainer