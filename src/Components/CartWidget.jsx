import{ useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import cartIcon from "../../public/cart-wid.svg"
const BotonCarrito = ({ total }) => {

  return (

    <Link to={"/cart"} className="btn btn-greenHome position-relative">
      <img src={cartIcon} alt="Carrito" width="32" />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
        {total}
      </span>
    </Link>


  )

}

const CartWidget = () => {
  const { cartTotal } = useContext(CartContext);

  return cartTotal() > 0 ? <BotonCarrito total={cartTotal()} /> : "";
}

export default CartWidget;