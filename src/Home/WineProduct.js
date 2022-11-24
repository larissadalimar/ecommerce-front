import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function Wine(){
    const [wine, setWine] = useState([]);
    const {wineId} = useParams();

    useEffect(() => {

        const headers = {
            id: wineId
        }


        const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/wine`, {headers});

        promise.then((res) => {setWine(res.data.wine)});

        promise.catch((err) => {console.log(err.response.data)})

    }, [wineId]);

    return (
        <>  
            <Nav>
                <SectionImg>
                    <img src={wine.image}/>
                </SectionImg>

                <SectionName>
                    <h1> {wine.name}</h1>
                    <p>{wine.type}</p>
                    <p>{wine.alcohol}</p>
                </SectionName>

                <SectionDescription>  
                    <h6> Comentario do Sommelier:</h6>                 
                    <p>{wine.description}</p>
                </SectionDescription>

                <SectionValue>                   
                    <p> R$ {wine.value}</p>
                </SectionValue>

                <Button> comprar </Button>
            </Nav>
        </>
    )
}

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`

const SectionImg = styled.section`
    background-color: white;
    width: 100%;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    & img{
        width: 150px;
    }
`

const SectionName = styled.section`
    color: #322938;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & h1{
        font-size: 40px;
        margin-top: 20px;
        font-weight: bold;
    }
    & p{
        font-size: 20px;
        margin-top: 10px;
        font-weight: 400;
    }
`

const SectionDescription = styled.section`
    background-color: white;
    margin-top: 20px;
    padding: 10px;
    font-size: 20px;
    border-radius: 5px;
    & h6{
        margin-bottom: 10px;
        color: #322938;
        font-weight: bold;
    }
`

const SectionValue = styled.section`
    //background-color: white;
    margin-top: 20px;
    font-size: 50px;
    color: #322938;
`

const Button = styled.button`
    background-color: #322938;
    width: 200px;
    height: 60px;
    margin-top: 60px;
`

