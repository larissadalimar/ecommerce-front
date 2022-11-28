import axios from "axios"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { AuthContext } from "../Components/Auth"
import FooterHome from "../Home/FooterHome"
import { TitleDiv } from "../Home/HomePage"
import { CartContext } from "./CartContext"
import ProductCart from "./ProductCart"

export default function Cart(){

    const { cart, setCart } = useContext(CartContext)
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect( () => {
        const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/cart`, { 
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        })

        promise.then((res) => {
            res.data.products?
                setCart(res.data.products) :
                alert(res.data);
                navigate("/home");  
        })

        promise.catch((err) => console.log(err))

    }, [cart])

    return(
        <>
            <TitleDiv>
                <h1 className="cart">Carrinho</h1>
            </TitleDiv>
            <CartContainer className="cart-products">
                {cart?.map((product, index) => <ProductCart key={index} product={product}/>)}
            </CartContainer>
            <FooterHome/>
        </>
    )
}

const CartContainer = styled.div`
    margin: 3% 5% 20% 5%;
`