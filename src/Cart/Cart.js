import axios from "axios"
import { useContext, useEffect } from "react"
import { AuthContext } from "../Components/Auth"
import { CartContext } from "./CartContext"

export default function Cart(){

    const { cart, setCart } = useContext(CartContext)
    const { token } = useContext(AuthContext)

    useEffect( () => {
        const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/cart`, { 
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        promise.then((res) => setCart(res.data))

        promise.catch((err) => console.log(err))

    }, [cart])

    return(
        <>
            {cart.map((product) => <p>{product}</p>)}
        </>
    )
}