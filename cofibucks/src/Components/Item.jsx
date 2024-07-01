import {Link} from "react-router-dom"


const Item = ({ item }) => {
    return (
        <div className="col-md-4">
            <Link to={"/item/" + item.id} className="text-dark text-decoration-none">
                <div className="text-center mt-5 position-relative">
                    <img src={item.Imagen} className="card-img-top" alt={item.nombre} />
                    <div className="overlay position-absolute">
                        <h2>
                           {item.nombre}
                        </h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Item