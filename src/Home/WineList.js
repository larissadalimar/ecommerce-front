import styled from "styled-components";
import { Link } from "react-router-dom";

export default function WineList({item}){
    return (
        <>
            
            <WineDiv>
                <Link to={`/wine/${item._id}`}>
                    <img src={item.image} alt={"vinho"}/>
                    <h2> {item.name}</h2>
                    <h6> R$: {item.value} </h6>
                </Link>
            </WineDiv>
        </>
    )
}

const WineDiv = styled.div`
    background-color: #c6c6c6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 145px;
    height: 320px;
    border: 2px solid #322938;
    margin: 10px;
`