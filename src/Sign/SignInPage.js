import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useContext} from "react";
import { useNavigate } from "react-router-dom";

import {Nav, SectionImg, DivInput, DivA, Button} from "./Styled";
import {AuthContext} from "../Components/Auth";

export default function HomePage(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    const {setToken} = useContext(AuthContext);

    function signIn(event){

        event.preventDefault();

        const login = {
            email,
            password
        };

        console.log(login)

        const promise = axios.post(`${process.env.REACT_APP_API_BASE_URL}/sign-in`, login);

        promise.then((resp => {setToken(resp.data); navigate("/home")}));

        promise.catch((err => {console.log(err)}));
    }

    return (
        <>
            <Nav>
                <SectionImg>
                    <h1> WineDrop </h1>
                </SectionImg>

                <form onSubmit={signIn}>
                    <DivInput >
                        <input placeholder="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                        <input placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                        <Button type="submit"> Entrar </Button>
                    </DivInput>
                </form>

                <DivA>
                    <Link to="/sign-up" data-identifier="sign-up-action">
                        Não tem uma conta? Cadastre-se! 
                    </Link>
                </DivA>
            </Nav> 

        </>
    )
};