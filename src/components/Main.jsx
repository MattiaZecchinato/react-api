import { useState, useEffect } from "react";
// axios
import axios from 'axios';

// CardActor
import CardActor from './CardActor';

export default function Main() {

    const [actors, setActorList] = useState([]);

    const uri = 'https://www.freetestapi.com/api/v1/actors';

    useEffect(() => {

        axios.get(uri).then(res => {

            const actorsList = res.data;
            console.log(actorsList);
            setActorList(actorsList);
        })
        .catch(() => {

            console.log('Error');
        });
    }, []);
    
    return <div className="cards-container">
        {actors.map(elem => <CardActor actor={elem} key={elem.id} />)}
    </div>
}