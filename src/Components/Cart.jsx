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
                        <div className="alert alert-danger" role="alert">  No se encontraron productos
                        </div>
                        <Link to={"/"} className="btn btn-warning">Volver a la Página Principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-12">

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" colSpan={5} className="text-end"><Link onClick={clear} className="btn btn-warning" title={"Vaciar Carrito"}>Vaciar Carrito</Link></th>
                            </tr>

                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col">Producto</th>
                                <th scope="col" className="text-end">Cantidad</th>
                                <th scope="col" className="text-end">Precio</th>
                                <th scope="col">&nbsp;</th>
                            </tr>

                        </thead>


                        <tbody>

                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.Imagen} alt={item.nombre} width={60} /></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="align-middle text-end">{item.quantity}</td>
                                    <td className="align-middle text-end">${item.quantity * item.precio}</td>
                                    <td className="align-middle text-end"><Link onClick={() => { removeItem(item.id) }} title={"Eliminar Producto"}><img src={"/image/trash3.svg"} alt={"Eliminar Producto"} width={25} /></Link></td>
                                </tr>
                            ))
                            }

                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="text-end"><b>Total a Pagar</b></td>
                                <td className="text-end"><b>${sumTotal()}</b></td>
                                <td className="text-end"><Link to={'/Checkout'} className="btn btn-warning">Finalizar Compra</Link></td>
                            </tr>

                        </tbody>
                    </table>

                </div>
            </div>
        </div >
    )
}
export default Cart;