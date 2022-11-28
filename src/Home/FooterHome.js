import { useContext } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { AuthContext } from "../Components/Auth"
 

export default function FooterHome(){

    const { user } = useContext(AuthContext)

    return (
        <Footer>
            <Link to={"/cart"}>
                <ion-icon name="cart"></ion-icon>
            </Link>
            <h3> Olá, {user.name}</h3>
            <ion-icon name="log-in-outline"></ion-icon>
        </Footer>
    )
}

const Footer = styled.footer`
    background-color: #322938;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    position: fixed;
    bottom:0;
    width: 100%;
    height: 80px;
    & ion-icon{
        font-size: 50px;
        color: white;
    }
    & h3{
        font-family: 'Saira Stencil One';
        font-size: 50px;
        color: white;
    }
`