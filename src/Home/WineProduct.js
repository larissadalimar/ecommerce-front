import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Wine(){
    const [wine, setWine] = useState({});
    const {wineId} = useParams();

    useEffect(() => {

        const body = {
            wineId
        }
        
        const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/wine`, body);

        promise.then((res) => {setWine(res.data)});

        promise.catch((err) => {console.log(err.response.data)})

    }, [])

    return (
        <h1> 
            {wine.name}
        </h1>
    )
}