import React from "react";
import home_img from '../../public/4365502.jpg'
import coffeHome from '/vecteezy_cappuccino-coffee-cup-cutout_23522858.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Home = () => {
  return (
    <div className="container">
      <div className="row main-heading">
        <div className="col-md-6 position-relative">
          <h2 className="maintext position-absolute">Bienvenidos</h2>
          <h3 className="subtitle position-absolute tittle-products">
            Tu viaje al mejor café comienza aquí.
          </h3>
        </div>
        <div className="col-md-6">
          <img src={coffeHome} alt="Café" className="img-fluid" />
        </div>
      </div>

      <div data-aos="fade-down">
      <div className="row">
        <div className="col-md-6 alert-success rounded-2" role="alert">
          <h2 className="text-uppercase text-center mt-5">Nosotros</h2>
          <h3 className="text-center">La tiendita del buen café</h3>
          <p className="pt-5 mx-5">
            En Cofibucks, creemos que cada taza de café es una invitación a un viaje sensorial. Desde el año 1970, hemos dedicado nuestro corazón y alma a la búsqueda de los granos de café más exquisitos, llevando a nuestros clientes en una aventura de sabores que trasciende fronteras.
          </p>
          <p className="mx-5">
            Nuestra historia comenzó en las laderas de las montañas de Colombia, donde descubrimos nuestra pasión por el café artesanal. Con cada grano seleccionado a mano y cada lote tostado a la perfección, nos comprometemos a ofrecer una experiencia única que solo un café de calidad superior puede proporcionar.
          </p>
          <p className="mx-5">
            Te invitamos a visitarnos y ser parte de nuestra comunidad. Ya sea que prefieras un espresso intenso, un capuchino cremoso o una de nuestras especialidades de la casa, estamos aquí para servirte con una sonrisa y el mejor café que hayas probado.
            ¡Te esperamos en Café Aromas del Mundo, donde cada sorbo cuenta una historia!
          </p>
        </div>
        <div className="col-md-6">
          <img className="img-fluid rounded-3" src={home_img} alt="Imagen home" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;