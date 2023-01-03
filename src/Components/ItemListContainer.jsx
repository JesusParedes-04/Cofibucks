import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import arrayProductos from "./json/productos.json"
import ItemList from "./ItemList";
import { addDoc, collection, doc, getDocs, getFirestore, query, where } from "firebase/firestore"


const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const { id } = useParams();

    // useEffect(() => {
    //     const promesa = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
    //         }, 2000);
    //     });
    //     promesa.then((data) => {
    //         setItems(data);
    //     })
    // }, [id])



    //-------- Proceso para cargar productos en nuestra collection ------
    // addDoc solo lo utilizamos para cargar productos en nuestra coleccion


    // useEffect(() => {

    //     const db = getFirestore();
    //     const itemsCollection = collection(db, 'Items')

    //     arrayProductos.forEach((item) => {

    //         addDoc(itemsCollection, { nombre: item.nombre, descripcion: item.descripcion, precio: item.precio, Imagen: item.Imagen, stock: item.stock, categoria: item.categoria })

    //     })     //Guardo el objeto con las keys y campos que yo quiero


    //     arrayProductos.forEach((item) => {

    //         addDoc(itemsCollection, {item})  //Guardo el objeto original y completo
    //     })


    // }, []);


    //Consulta a nuestra coleccion de base de datos


    useEffect(() => {

        const db = getFirestore();
        const itemsCollection = collection(db, 'Items')
        // const q = query(itemsCollection, where('precio', '<', 1000), limit(3)) //Consulta de filtrado
        console.log(id);
        const q = id ? query(itemsCollection, where('categoria', '==', id)) : itemsCollection


        //En caso de tener ID, filtro los productos por ID, sino traigo la collection completa
        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map((doc) => (
                { id: doc.id, ...doc.data() })

            ))
        });

    }, [id]);


    return (
        <div className="container">
            <h1 className="text-center bg-success p-4 mb-4 text-light">Catalogo de Productos</h1>
            <ItemList items={items} />
        </div>

    )

}

export default ItemListContainer