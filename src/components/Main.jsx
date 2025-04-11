import { useState, useEffect } from "react";

// axios
import axios from 'axios';

export default function Main() {

    const uri = 'https://www.freetestapi.com/api/v1/actors';

    useEffect(() => {

        axios.get(uri).then(res => {

            const actorsList = res.data;
            console.log(actorsList);
        })
        .catch(() => {

            console.log('Error');
        });
    }, []);

    return <>
        {/* <button onClick={setActor}>Log actor</button> */}
    </>
}