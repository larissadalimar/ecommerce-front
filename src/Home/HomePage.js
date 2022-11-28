import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import {AuthContext} from "../Components/Auth";
import WineList from "./WineList";
import { useNavigate } from "react-router-dom";
import FooterHome from "./FooterHome";


export default function HomePage(){

    const { user } = useContext(AuthContext);
    
    const [products, setProducts] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        };
        
        const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/products`, config);

        promise.then(catchWines);

        promise.catch(err => {alert("Seu tempo expirou!"); navigate("/"); window.location.reload()});

        function catchWines(resp){
            setProducts(resp.data.wines)
        }

    }, [user, navigate]);

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

            <FooterHome />
        </>
    )
}

const Nav = styled.nav`
    padding: 15px;
    margin-bottom: 70px;
`

export const TitleDiv = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Saira Stencil One';
    font-size: 60px;
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
    margin-top: 60px;
    border-radius: 5px;
    border: 5px solid #322938;
`