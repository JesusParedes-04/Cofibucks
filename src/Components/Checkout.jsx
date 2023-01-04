import React, { useContext } from "react";
import { CartContext } from "./context/CartContext"
import { addDoc, doc, collection, getFirestore, updateDoc, writeBatch } from "firebase/firestore"
import { useState } from "react";

const Checkout = () => {
    const { cart, clear, sumTotal } = useContext(CartContext)
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')
    const [orderID, setOrderID] = useState('')


    const generarOrden = () => {
        const fecha = new Date();
        const order = {
            buyer: { name: nombre, phone: telefono, email: email },
            items:
                cart.map(item => ({ id: item.id, title: item.nombre, quantity: item.quantity, price: item.precio, price_total: item.cantidad * item.precio })),
            total: sumTotal(),
            order_date: `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:
                    ${fecha.getMinutes()}:${fecha.getSeconds()}`

        }

        const db = getFirestore();
        const ordersCollection = collection(db, 'orders')
        addDoc(ordersCollection, order).then((snapShot) => {
            setOrderID(snapShot.id)
            const generatedOrder = doc(db, 'orders', snapShot.id) //Selecciono la orden a modificar
            updateDoc(generatedOrder, { total: order.total * 1.21 }) //Actualiza la orden generada aplicando un 21% al valor total


            //Modificar un documento en batch
            // const batch = writeBatch(db)
            // const updatedOrder = doc(db, "orders", snapShot.id)
            // batch.update(updatedOrder, { total: 10000 })
            // batch.set(updatedOrder, { ...order, price_friend: sumTotal() * 0.9 })
            // batch.commit();        //  Efectivizar la actualizacion o seteo de los campos y valores

            clear()
        })
    }

    return (

        <div className="container">
            <div className="row my-5">
                <div className="col-md-6">
                    <form >

                        <div className="mb-3">

                            <label htmlFor="nombre" className="form-label">Nombre:</label>
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
                    {orderID ? <div className="alert alert-warning" role="alert"> La orden generada es: <b>{orderID}</b></div> : ''}
                </div>
            </div>

        </div>


    )


}

export default Checkout