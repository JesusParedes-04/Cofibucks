import React from "react";

const Home = () => {
  return (
    <div className="container">

      <div className="row ms-2">

        <div className="col-md-6 bg-greenHome rounded-3 mt-4">
          <h1 className="text-center mb-5">Bienvenidos</h1>
          <h4 className="text-left mt-5">Nuestro café</h4>
          <p> Siempre ha sido y será una cuestión de calidad. Nos apasiona saber que tenemos un compromiso socialmente, responsable con los proveedores de los mejores granos de café, esmerarnos en tostar los granos y mejorar la vida de la gente que los cultiva. Nuestro profundo interés en todos estos aspectos hace que nuestro trabajo jamás termine.</p>
          <h4 className="text-left mt-5">Nuestro tostado Cofi</h4>
          <p> Cada café que ofrecemos exige un perfil de tostado único para crear una taza con el máximo aroma, acidez, cuerpo y sabor. Al trabajar en un delicado balance en calor, tiempo y arte, nuestros maestros en el tostado hacen resaltar estas únicas características de cada grano de café. </p>
        </div>
        <div className="col-md-6 mt-4">
          <img className="img-fluid rounded-3" src="/image/4365502.jpg" alt="imagenhome" />
        </div>
      </div>
    </div>
  );
};

export default Home;
