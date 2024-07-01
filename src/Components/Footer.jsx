import React from "react";

const Footer = () => {

    return (
        <div className="container">


            <div className="row footer-class mt-5">
                <div className="col d-flex align-items-center justify-content-center py-4">
                    <span>

                        <a href="https://web.facebook.com/StarbucksCba">
                            <i className="fa-brands fa-facebook ms-2 fs-4 text-light">  </i>
                        </a>

                    </span>
                    <span>

                        <a href="https://www.instagram.com/starbucksargentina/ ">    
                         <i className="fa-brands fa-instagram ms-2 fs-4 text-light">
                        </i></a>


                    </span>
                    <span>
                        <a href="https://www.linkedin.com/company/starbucks/">
                        <i className="fa-brands fa-linkedin ms-2 fs-4 text-light"></i></a>
                    
                    </span>
                </div>
            </div>
        </div>
    )
}


export default Footer; 