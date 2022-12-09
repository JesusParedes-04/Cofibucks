import React from "react";

const Home = () => {
  return (
    <div className="container my-5">
          <div className="row">
              <div className="col-md-6 alert alert-success pt-5" role={"alert"}>
                        <h1 className=" mt-5 text-center">Welcome</h1>
                        <h3 className="text-center">La tiendita del buen café</h3>
                        <p className="pt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut consequuntur sequi facere provident at perspiciatis dolorem! Explicabo vel quo sunt ipsam in qui aliquam sed! Velit suscipit nam laborum facere.
                        Impedit nam animi fuga itaque magni dolorum repudiandae amet dolorem modi enim provident ab, incidunt doloremque architecto esse, quod eius corrupti voluptatem consequuntur molestias et? Soluta corrupti perferendis asperiores veniam?</p>          
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src="/image/4365502.jpg" alt="imagenhome" />
                    </div>
               </div>
           </div>  
  );
};

export default Home;
