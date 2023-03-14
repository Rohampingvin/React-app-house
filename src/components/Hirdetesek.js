import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { db } from '../Firebase';
import { collection, getDocs } from 'firebase/firestore';

const Hirdetesek = () => {
    const [hirdetesek, setHirdetesek] = useState([]);
    const hirdetesCollectionRef = collection(db,"Hirdetesek")

    useEffect(() => {
        const getData = async () => {
            const data = await getDocs(hirdetesCollectionRef);
            setHirdetesek(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
        };

        getData();
    }, []);

    return ( 
        <div className="hirdetesek">
            {hirdetesek.map((hirdetes) => {
                return <div key={hirdetes.id}>
                            <article>
                            <h1 >cim: {hirdetes.cim} </h1>
                            <img src={hirdetes.kep} alt="pokemon" />
                            <p>leiras: {hirdetes.leiras} </p>
                            </article>
                        </div>
                } )}
        </div>
     );
}
 
export default Hirdetesek;