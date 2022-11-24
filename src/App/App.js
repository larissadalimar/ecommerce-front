import {BrowserRouter, Routes, Route} from "react-router-dom";
import GlobalStyle from "../Components/GlobalStyle";

import AuthProvider from "../Components/Auth";
import SignInPage from "../Sign/SignInPage";
import SignUpPage from "../Sign/SignUpPage";
import HomePage from "../Home/HomePage";
import Wine from "../Home/WineProduct"

export default function App() {

  return (
    <>
      <BrowserRouter>
            <GlobalStyle/>

            <AuthProvider>
                <Routes>
                    <Route path={"/"} element={<SignInPage />} />
                    <Route path={"/sign-up"} element={<SignUpPage />} />
                    <Route path={"/home"} element={<HomePage />} />
                    <Route path={"/wine/:wineId"} element={<Wine/>}/>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    </>
  );
}