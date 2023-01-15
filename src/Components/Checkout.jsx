import { addDoc, doc, collection, getFirestore, updateDoc } from "firebase/firestore"
import React, { useContext } from "react";
import { useState } from "react";
import {Navigate} from "react-router-dom"
import { CartContext } from "./context/CartContext"

const Checkout = () => {
    const { cart, clear, sumTotal } = useContext(CartContext)
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')
    const [direccion, setDireccion] = useState('')
    const [orderID, setOrderId] = useState('')


    const generarOrden = () => {
        const fecha = new Date();
        const order = {
            buyer: { name: nombre, phone: telefono, email: email, direction: direccion },
            items:
                cart.map(item => ({ id: item.id, title: item.nombre, quantity: item.quantity, price: item.precio, price_total: item.quantity * item.precio })),
            total: sumTotal(),
            order_date: `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:
                    ${fecha.getMinutes()}:${fecha.getSeconds()}`

        }


        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((snapShot) => {
            setOrderId(snapShot.id);
            const generatedOrder = doc(db, "orders", snapShot.id); 
            updateDoc(generatedOrder, {total:order.total * 1.21}); 

            clear();
        });
    }


        // const db = getFirestore();
        // const ordersCollection = collection(db, 'orders')
        // addDoc(ordersCollection, order).then((snapShot) => {
        //     setOrderID(snapShot.id)
  
        //     clear();

        // });
      
    

    return (

        <div className="container">
            <div className="row my-5">
                <div className="col-md-6">
                    <form >

                        <div className="mb-3">

                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" placeholder=" Ingrese su nombre" onInput={(e) => { setNombre(e.target.value) }} />
                        </div>

                        <div className="mb-3">

                            <label htmlFor="telefono" className="form-label">Teléfono</label>
                            <input type="number" className="form-control" id="telefono" placeholder=" Ingrese su Teléfono" onInput={(e) => { setTelefono(e.target.value) }} />
                        </div>


                        <div className="mb-3">

                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" className="form-control" id="email" placeholder=" Ingrese su Email" onInput={(e) => { setEmail(e.target.value) }} />
                        </div>


                        <div className="mb-3">

                            <label htmlFor="email" className="form-label">Dirección</label>
                            <input type="text" className="form-control" id="direccion" placeholder=" Ingrese su Dirección" onInput={(e) => { setDireccion(e.target.value) }} />
                        </div>

                        <button type="button" className="btn btn-success" onClick={generarOrden}>Generar Orden</button>

                    </form>
                </div>
                <div className="col-md-6">

                    <table className="table">

                        <tbody>

                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.Imagen} alt={item.nombre} width={60} /></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="align-middle text-end">{item.quantity}</td>
                                    <td className="align-middle text-end">${item.quantity * item.precio}</td>
                                </tr>
                            ))
                            }

                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="text-end"><b>Total a Pagar</b></td>
                                <td className="text-end"><b>${sumTotal()}</b></td>
                            </tr>

                        </tbody>
                    </table>

                </div>

            </div>

            <div className="row">
                <div className="col text-center">
                    {orderID !== "" ? <Navigate to= {"/Thankyou/" + orderID} /> : "" }
                </div>
            </div>

        </div>


    )


}

export default Checkout