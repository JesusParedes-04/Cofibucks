import React from "react";

const Home = () => {
  return (
    <div className="container my-5">
          <div className="row">
              <div className="col-md-6 alert alert-success pt-5" role={"alert"}>
                        <h1 className=" text-center">Bienvenidos</h1>
                        <h4 className="mt-5 mx-5 text-left">Nuestro café</h4>
                        <p className="mx-5">Siempre ha sido y será una cuestión de calidad. Nos apasiona saber que tenemos un compromiso socialmente, responsable con los proveedores de los mejores granos de café, esmerarnos en tostar los granos y mejorar la vida de la gente que los cultiva. Nuestro profundo interés en todos estos aspectos hace que nuestro trabajo jamás termine.</p>  
                        <h4 className="mt-5 mx-5 text-left">Nuestro tostado Starbucks</h4>
                        <p className="mx-5"> Cada café que ofrecemos exige un perfil de tostado único para crear una taza con el máximo aroma, acidez, cuerpo y sabor. Al trabajar en un delicado balance en calor, tiempo y arte, nuestros maestros en el tostado hacen resaltar estas únicas características de cada grano de café. </p>        
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src="/image/4365502.jpg" alt="imagenhome" />
                    </div>
               </div>
           </div>  
  );
};

export default Home;
