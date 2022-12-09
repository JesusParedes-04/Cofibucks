import React from "react";

const Experienciacofi = ({mensaje}) => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-12">
          <div className="alert alert-success text-center" role={"alert"}>
            <h1>{mensaje}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experienciacofi;
