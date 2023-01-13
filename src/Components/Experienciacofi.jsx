import React from "react";

const Experienciacofi = ({ mensaje }) => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-12">
          <div className="alert alert-success text-center" role={"alert"}>
            <h1>{mensaje}</h1>
          </div>
        </div>

        <div className="container-fluid justify-content-center align-items-center mt-5">
        <div className="row bg-experiencia py-3">
          <div className="col-md-6" >
            <h3 className="text-center mt-5">In Store</h3>
            <p className="my-5 text-center fs-5">En nuestras tiendas te esperan nuestros baristas capacitados para ofrecerte una bebida muy especial. El ambiente cálido y los detalles de nuestros productos elaborados artesanalmente hacen que la experiencia sea única e inigualable.</p>
          </div>
          <div className="col-md-6">
            <img className="img-fluid mx-auto" src="/image/Instore.png" alt="instore" />
          </div>
        </div>

        <div className="row bg-experiencia py-3 mt-3">

        <div className="col-md-6">
            <img className="img-fluid" src="/image/driveThru.png" alt="driveThru" />
          </div>

          <div className="col-md-6 bg-experiencia">
            <h3 className="text-center mt-5">Drive Thru</h3>
            <p className="my-5 text-center fs-5">Retirá tu bebida favorita y viví la Experiencia Starbucks sin bajarte del auto.</p>
          </div>
     
        </div>

        <div className="row bg-experiencia py-3 mt-3">
          <div className="col-md-6 bg-experiencia">
            <h3 className="text-center mt-5">Delivery</h3>
            <p className="my-5 text-center fs-5">Los clientes pueden pedir sus bebidas y productos favoritos donde sea que estén con operadores logísticos al servicio como Pedidos Ya.</p>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src="/image/Delivery.png" alt="Delivery" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Experienciacofi;
