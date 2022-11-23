import styled from "styled-components";

export default function HomePage(){
    return (
        <>
            
            <section>
                <TitleDiv>
                    <h1>WineDrop</h1>
                </TitleDiv>
            </section>

            <Nav>
                <ProductsSection>
                    <WineDiv>
                        <img src={"https://www.wine.com.br/cdn-cgi/image/q=99,f=png,h=176/assets-images/produtos/20884-01.png"} alt={"vinho"}/>
                        <h2> Davideira</h2>
                        <p> vinho </p>
                        <h6>R$: 64,90 </h6>
                    </WineDiv>

                    <WineDiv>
                        <img src={"https://www.wine.com.br/cdn-cgi/image/q=99,f=png,h=176/assets-images/produtos/20884-01.png"} alt={"vinho"}/>
                        <h2> Davideira</h2>
                        <p> vinho bão dms </p>
                        <h6>R$: 64,90 </h6>
                    </WineDiv>

                    <WineDiv>
                        <img src={"https://www.wine.com.br/cdn-cgi/image/q=99,f=png,h=176/assets-images/produtos/20884-01.png"} alt={"vinho"}/>
                        <h2> Davideira</h2>
                        <p> vinho </p>
                        <h6>R$: 64,90 </h6>
                    </WineDiv>

                    <WineDiv>
                        <img src={"https://www.wine.com.br/cdn-cgi/image/q=99,f=png,h=176/assets-images/produtos/20884-01.png"} alt={"vinho"}/>
                        <h2> Davideira</h2>
                        <p> vinho bão dms </p>
                        <h6>R$: 64,90 </h6>
                    </WineDiv>

                    <WineDiv>
                        <img src={"https://www.wine.com.br/cdn-cgi/image/q=99,f=png,h=176/assets-images/produtos/20884-01.png"} alt={"vinho"}/>
                        <h2> Davideira</h2>
                        <p> vinho </p>
                        <h6>R$: 64,90 </h6>
                    </WineDiv>

                    <WineDiv>
                        <img src={"https://www.wine.com.br/cdn-cgi/image/q=99,f=png,h=176/assets-images/produtos/20884-01.png"} alt={"vinho"}/>
                        <h2> Davideira</h2>
                        <p> vinho bão dms </p>
                        <h6>R$: 64,90 </h6>
                    </WineDiv>

                    <WineDiv>
                        <img src={"https://www.wine.com.br/cdn-cgi/image/q=99,f=png,h=176/assets-images/produtos/20884-01.png"} alt={"vinho"}/>
                        <h2> Davideira</h2>
                        <p> vinho </p>
                        <h6>R$: 64,90 </h6>
                    </WineDiv>

                    <WineDiv>
                        <img src={"https://www.wine.com.br/cdn-cgi/image/q=99,f=png,h=176/assets-images/produtos/20884-01.png"} alt={"vinho"}/>
                        <h2> Davideira</h2>
                        <p> vinho bão dms </p>
                        <h6>R$: 64,90 </h6>
                    </WineDiv>

                </ProductsSection>     
            </Nav>

            <Footer>
                    <ion-icon name="cart"></ion-icon>
                    <ion-icon name="log-in-outline"></ion-icon>
            </Footer>
        </>
    )
}

const Nav = styled.nav`
    padding: 20px;
`

const TitleDiv = styled.div`
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Saira Stencil One';
    font-size: 40px;
    color: #322938;

`

const ProductsSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    flex-wrap: wrap;
`

const WineDiv = styled.div`
    background-color: #c6c6c6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 130px;
    border: 2px solid #322938;
    margin: 10px;
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


`