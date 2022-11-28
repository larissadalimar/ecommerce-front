import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

import { Nav, SectionImg, DivInput, DivA, Button } from "./Styled";

export default function HomePageCadastro() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [habilit, setHabilit] = useState(false);
    const [disabled, setDisabled] = useState(false);

    let navigate = useNavigate();

    function signUp(event) {

        event.preventDefault();

        setHabilit(true);
        setDisabled(true);

        const registration = {
            name,
            email,
            password,
            confirmPassword
        };

        const promise = axios.post(`${process.env.REACT_APP_API_BASE_URL}/sign-up`, registration);

        promise.then((resp => { alert('Parabéns por ter criado sua conta'); navigate("/");}));

        promise.catch((err) => {alert(err.response.data.message); setHabilit(false); setDisabled(false)});
    };

    return (
        <>
            <Nav>
                <SectionImg>
                    <h1> WineDrop </h1>
                </SectionImg>

                <form onSubmit={signUp}>
                    <DivInput>
                        <input disabled={disabled} placeholder="Nome" type="text" value={name} onChange={(e) => setName(e.target.value)} required></input>
                        <input disabled={disabled} placeholder="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                        <input disabled={disabled} placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                        <input disabled={disabled} placeholder="Confirme a senha" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required></input>
                        <Button disabled={disabled} type="submit"> {!habilit ? "Cadastrar" : <ThreeDots color={"white"}/>} </Button>
                    </DivInput>
                </form>

                <DivA>
                    <Link to="/">
                        Já tem uma conta? Faça login
                    </Link>
                </DivA>
            </Nav>
        </>
    )
};