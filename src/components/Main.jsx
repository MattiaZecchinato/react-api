import { useState, useEffect } from "react";
// axios
import axios from 'axios';

// CardActor
import CardActor from './CardActor';

export default function Main() {

    const [actors, setActorList] = useState([]);
    const [actress, setActressList] = useState([]);

    const uriActors = 'https://www.freetestapi.com/api/v1/actors';
    const uriActress = 'https://www.freetestapi.com/api/v1/actresses';

    useEffect(() => {

        axios.get(uriActors).then(res => {

            const actorsList = res.data;
            console.log(actorsList);
            setActorList(actorsList);
        })
        .catch(() => {

            console.log('Error');
        });
    }, []);

    useEffect(() => {

        axios.get(uriActress).then(res => {

            const actressList = res.data;
            console.log(actressList);
            setActressList(actressList);
        })
        .catch(() => {

            console.log('Error');
        });
    }, [])
    
    return <>
        <div className="cards-container">
            {actors.map(elem => <CardActor actor={elem} key={elem.id} />)}
        </div>
        <hr />
        <div className="cards-container">
            {actress.map(elem => <CardActor actor={elem} key={elem.id} />)}
        </div>
    </>
}