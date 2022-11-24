import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Wine(){
    const [wine, setWine] = useState({});
    const {wineId} = useParams();

    useEffect(() => {

        const body = {
            id: wineId
        }

        console.log(body);

        const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/wine`, body);

        promise.then((res) => {setWine(res.data.wine)});

        promise.catch((err) => {console.log(err.response.data)})

    }, [wineId]);

    return (
        <h1> 
           oi
        </h1>
    )
}