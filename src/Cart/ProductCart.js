import styled from "styled-components"
import axios from "axios"
import { useContext } from "react"
import { AuthContext } from "../Components/Auth"

export default function ProductCart(props){

    const { image, name, value } = props.product

    const { user } = useContext(AuthContext)



    function deleteProductCart(){

        const promise = axios.put(`${process.env.REACT_APP_API_BASE_URL}/remove-product-cart`, {product: props.product}, 
        { headers: {
            Authorization: `Bearer ${user.token}`
        }})

        promise.then((res) => alert(res.data))

        promise.catch((err) => console.log(err))

    }

    return(
        <>
            <CartStyle>
                <div className="product-info">
                    <img className="image-product" src={image} alt={name}/>
                    <div>
                        <h3 className="product-name">{name}</h3>
                        <br/>
                        <h2 className="product-value"> R$ {value}</h2>
                    </div>
                </div>
                <div>
                    <ion-icon name="trash-sharp" onClick={deleteProductCart}></ion-icon>
                </div>
            </CartStyle>
        </>
    )
}


const CartStyle = styled.div`

    width: 100%;
    height: 100px;
    
    background-color: white;
    border-radius: 5px;

    .product-info {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }


    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 5%;
    box-sizing: border-box;

    margin-bottom: 15px; 

    img {
        width: 60px;
        height: 70px;
    }

    ion-icon {
        width: 20px;
        height: 50px;
        cursor: pointer;
    }
`