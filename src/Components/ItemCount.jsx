import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ItemCount = ({ stock, onAdd }) => {
    const [counter, setCounter] = useState(1)
    //Va llegar via prop del otro componente
    const [itemStock, setItemStock] = useState(stock)
    //Tecnica rendering: Cuando se le haga click hará el switch al boton carrito
    const [vendido, setVendido] = useState(false)


    const decrementarStock = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    const incrementarStock = () => {
        if (counter < itemStock) {
            setCounter(counter + 1)
        }
    }

    const addToCart = (quantity) => {

        //Validacion

        if (counter <= itemStock) {

            //Counter es el numero del medio que se va inicializar en uno
            setCounter(1)
            //Actualiza la cantidad del stock
            setItemStock(itemStock - quantity)
            //Switchea el btn
            setVendido(true)
            onAdd(quantity)
        }
    }

    useEffect(() => {

        setItemStock(stock)

    }, [stock])

    return (
        <div>
            <div className="row mb-4 ">
                <div className="col-md-6 text-center mx-auto">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-success" onClick={decrementarStock}>-</button>
                        <button type="button" className="btn btn-outline-success">{counter}</button>
                        <button type="button" className="btn btn-outline-success" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 text-center mx-auto">

                    {/* Aplicamos tecnica de rendering */}

                    {vendido ? < Link to={"/cart"} className="btn btn-outline-success"> Terminar La Compra </Link> :

                        <button type="button" className="btn btn-outline-success" onClick={() => { addToCart(counter) }}>Agregar al Carrito</button>}
                </div>
            </div>
        </div>
    )
}

export default ItemCount