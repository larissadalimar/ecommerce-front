import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {AuthContext} from "../Components/Auth";
import WineList from "./WineList";


export default function HomePage(){

    const { token } = useContext(AuthContext);
    
    const [products, setProducts] = useState([]);
    const [user, setUser] = useState([]); 
    let navigate = useNavigate();

    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        
        const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/products`, config);

        promise.then(catchWines);

        promise.catch(err => {alert("Seu tempo expirou!"); navigate("/"); window.location.reload()});

        function catchWines(resp){
            setProducts(resp.data.wines);
            setUser(resp.data.user);
        }

    }, [token, navigate]);

    return (
        <>           
            <section>
                <TitleDiv>
                    <h1>WineDrop</h1>
                </TitleDiv>
            </section>

            <Nav>
                <ProductsSection>
                   {products?.map((item, i) => <WineList item={item} key={i}/>)}                  
                </ProductsSection>     
            </Nav>

            <Footer>
                    <ion-icon name="cart"></ion-icon>
                    <h3> Ola, {user}</h3>
                    <ion-icon name="log-in-outline"></ion-icon>
            </Footer>
        </>
    )
}

const Nav = styled.nav`
    padding: 15px;
    margin-bottom: 70px;
`

const TitleDiv = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Saira Stencil One';
    font-size: 40px;
    color: #322938;
    position: fixed;
    top: 0;
	background-color: #31684A;
`

const ProductsSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    flex-wrap: wrap;
    margin-top: 55px;
    border-radius: 5px;
    border: 5px solid #322938;
`

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