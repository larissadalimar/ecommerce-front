import { useContext } from "react"
import { Link, useNavigate} from "react-router-dom"
import styled from "styled-components"
import { AuthContext } from "../Components/Auth"
import axios from "axios"
 

export default function FooterHome(){

    const { user } = useContext(AuthContext);
    let navigate = useNavigate();

    function logOut(){
        
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        };

        const promise = axios.delete(`${process.env.REACT_APP_API_BASE_URL}/sessions`, config);

        promise.then((res) => {
            navigate("/");
            window.location.reload();
        });

        promise.catch((err) => {
            navigate("/");
            window.location.reload();
        });
    }

    return (
        <Footer>
            <Link to={"/cart"}>
                <ion-icon name="cart"></ion-icon>
            </Link>
            <h3> Olá, {user.name}</h3>
            <ion-icon onClick={logOut} name="log-in-outline"></ion-icon>
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
        font-size: 45px;
        color: white;
        border-radius: 10px;
        cursor: pointer;
    }
    & h3{
        font-family: 'Saira Stencil One';
        font-size: 40px;
        color: white;
    }
`