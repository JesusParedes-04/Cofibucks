import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, 'Items');
        // const q = query(itemsCollection, where('precio', '<', 1000), limit(3)) //Consulta de filtrado
        console.log(id);
        const q = id ? query(itemsCollection, where('categoria', '==', id)) : itemsCollection;

        //En caso de tener ID, filtro los productos por ID, sino traigo la collection completa
        getDocs(q).then((querySnapshot) => {
            const itemsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setItems(itemsData);
            setLoading(false);
        });
    }, [id]);

    return (
        <div className="container-md">
            {loading ? <Loading /> : <ItemList items={items} />}
        </div>
    );
};

export default ItemListContainer;
