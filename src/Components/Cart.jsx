import React, { useContext } from "react";
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, cartTotal, clear, removeItem, sumTotal } = useContext(CartContext)



    if (cartTotal() === 0) {

        return (
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-12 ">
                        <div className="rellenoDanger rounded-3 ">

                            <p className="fw-bold text-uppercase text-center">No se encontraron productos</p>
                        </div>
                        <Link to={"/"} className="btn btn-warning mt-4">Volver a la Página Principal</Link>
                    </div>
                </div>
            </div>
        )
    } else {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">

                        <div className="table-responsive-sm">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col" colSpan={5} className="text-end"><Link onClick={clear} className="btn btn-success fw-bold" title={"Vaciar Carrito"}>Vaciar Carrito</Link></th>
                                    </tr>

                                    <tr>
                                        <th scope="col">&nbsp;</th>
                                        <th scope="col" className="randomDark ">Producto</th>
                                        <th scope="col" className="text-end randomDark ">Cantidad</th>
                                        <th scope="col" className="text-end randomDark ">Precio</th>
                                        <th scope="col">&nbsp;</th>
                                    </tr>

                                </thead>


                                <tbody className="randomDark">

                                    {cart.map(item => (
                                        <tr key={item.id}>
                                            <td><img src={item.Imagen} alt={item.nombre} width={60} /></td>
                                            <td className="align-middle  ">{item.nombre}</td>
                                            <td className="align-middle text-end  ">{item.quantity}</td>
                                            <td className="align-middle text-end  ">${item.quantity * item.precio}</td>
                                            <td className="align-middle text-end ">
                                                <Link onClick={() => { removeItem(item.id) }} title={"Eliminar Producto"}><img src={"/image/trash3.svg"} alt={"Eliminar Producto"} width={25} /></Link></td>
                                        </tr>
                                    ))
                                    }

                                    <tr>
                                        <td colSpan={2}>&nbsp;</td>
                                        <td className="text-end randomDark"><b>Total a Pagar</b></td>
                                        <td className="text-end randomDark"><b>${sumTotal()}</b></td>
                                        <td className="text-end randomDark"><Link to={'/Checkout'} className="btn btn-success fw-bold">Finalizar Compra</Link></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>

                    </div>
                    <div className="pt-5">

                        <Link to={"/category"}>

                            <button className="rounded-3 btn btn-success fw-bold border-0 p-3 "> Volver al Catálogo </button>

                        </Link>

                    </div>
               
            </div>

        )


    }
}
export default Cart;