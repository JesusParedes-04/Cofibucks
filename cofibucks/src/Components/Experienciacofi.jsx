import React from "react";
import { Link } from "react-router-dom";
import deliveryImg from "../../public/Delivery.png"
import driveImg from "../../public/driveThru.png"
import storeImg from "../../public/InStore.png"



const Experienciacofi = ({ mensaje }) => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-12">
          <div className=" tittle-products rounded-3" >
            <h1 className="text-uppercase text-center">{mensaje}</h1>
          </div>
        </div>

        <div className="container-fluid justify-content-center align-items-center mt-5">
          <div className="row bg-experiencia py-3 rounded-3 align-items-center">
            <div className="col-md-6" >
              <h3 className="text-center mt-5">In Store</h3>
              <p className="my-5 text-center fs-5">En nuestras tiendas te esperan nuestros baristas capacitados para ofrecerte una bebida muy especial. El ambiente cálido y los detalles de nuestros productos elaborados artesanalmente hacen que la experiencia sea única e inigualable.</p>
            </div>
            <div className="col-md-6">
              <img className="img-fluid mx-auto rounded-3" src= {storeImg} alt="instore" />
            </div>
          </div>

          <div className="row bg-experiencia py-3 mt-3 rounded-3">

            <div className="col-md-6">
              <img className="img-fluid  mx-auto rounded-3" src={driveImg} alt="driveThru" />
            </div>

            <div className="col-md-6 bg-experiencia align-items-center">
              <h3 className="text-center mt-5">Drive Thru</h3>
              <p className="my-5 text-center fs-5">Retira tu bebida favorita de Cofibucks sin necesidad de bajarte del auto, Te proporcionamos la comodidad de disfrutar de la Experiencia Cofibucks de manera rápida y eficiente desde tu vehículo.</p>
            </div>

          </div>

          <div className="row bg-experiencia py-3 mt-3 align-items-center rounded-3">
            <div className="col-md-6 bg-experiencia rounded-3 ">
              <h3 className="text-center mt-5">Delivery</h3>
              <p className="my-5 text-center fs-5">Los clientes pueden pedir sus bebidas y productos favoritos donde sea que estén con operadores logísticos al servicio como Pedidos Ya.</p>

              <div className="d-grid gap-2 col-6 mx-auto">


                <Link to={"/category"}>

                  <button className="rounded-3 btn btn-success fw-bold border-0">Escoge tu producto y te lo llevamos </button>

                </Link>

              </div>
            </div>
            <div className="col-md-6 ">
              <img className="img-fluid  mx-auto rounded-3" src={deliveryImg}alt="Delivery" />
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Experienciacofi;
