import React, { useContext } from "react";
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, cartTotal, clear, removeItem, sumTotal } = useContext(CartContext)

    if (cartTotal() === 0) {


        return (
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-12 text-center">
                        <div className="alert alert-danger" role="alert">
                            No se encontraron productos
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">

                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col" colSpan={5} className="text-end"> <Link onClick={clear} className="btn btn-warning"> Vaciar Carrito</Link> </th>
                            </tr>

                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio</th>
                                <th scope="col">&nbsp;</th>
                            </tr>

                        </thead>
                        <tbody>

                            {cart.map(item => (
                                <tr key={item.id} >

                                    <td>  <img src={item.imagen} alt={item.nombre} width={80} />  </td>

                                    <td className="align-middle">  {item.nombre}    </td>

                                    <td className="align-middle"> {item.quantity}  </td>

                                    <td className="align-middle">  ${item.quantity * item.precio}   </td>
                                    <td className="align-middle text-end">
                                        <Link onclick={() => { removeItem(item.id) }}><img src={"/images/trash3.svg"} alt={"Eliminar Producto"} width={32} />
                                        </Link>
                                    </td>


                                </tr>
                            ))
                            }

                            <tr>
                                <td colSpan={2}> &nbsp;</td>
                                <td className="text-end"> Total a Pagar</td>
                                <td> <b> ${sumTotal()} </b> </td>
                                <td className="text-end">
                                    <button className="btn btn-warning">Finalizar Compra</button>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                </div>
            </div>
        </div >
    )
}
export default Cart;