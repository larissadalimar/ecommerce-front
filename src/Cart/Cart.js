import axios from "axios"
import { useContext, useEffect, useState } from "react"
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
    const [value, setValue] = useState(0.0)
    const navigate = useNavigate()

    useEffect( () => {
        const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/cart`, { 
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        })

        promise.then((res) => {
            if(res.data.products){
                setCart(res.data.products)
                setValue(res.data.value)
            }else{
                alert(res.data) 
                navigate("/home")
            }
        })

        promise.catch((err) => console.log(err))

    }, [cart])

    function fecharPedido(){
        const promise = axios.post(`${process.env.REACT_APP_API_BASE_URL}/complete-purchase`, {
            payment: "payment",
            products: cart,
            value
        }, {
            headers : {
                Authorization: `Bearer ${user.token}`
            }
        })

        promise.then((res) => alert(res.data))

        promise.catch((err) => console.log(err))
    }

    return(
        <>
            <TitleDiv>
                <h1 className="cart">Carrinho</h1>
            </TitleDiv>
            <CartContainer className="cart-products">
                {cart?.map((product, index) => <ProductCart key={index} product={product}/>)}
                <h3>Valor total da compra: {value}</h3>
            </CartContainer>
            <button onClick={fecharPedido}> Fechar Pedido </button>
            <FooterHome/>
        </>
    )
}

const CartContainer = styled.div`
    margin: 90px 5% 20% 5%;
`