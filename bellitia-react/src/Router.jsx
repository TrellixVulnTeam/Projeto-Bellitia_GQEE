import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Views/Home/Home";
import HomeEstablishment from "./Components/Views/EstablishmentPages/EstablishmentHome/HomeEstablishment";
import Login from './Components/Views/Login';
import LoginUsuario from './Components/Views/LoginUsuario/LoginUsuario';
import NewServiceCard from "./Components/Views/EstablishmentPages/NewService/NewService";
import NewEstCard from "./Components/Views/EstablishmentPages/NewEstablishment/NewEstablishment";
import NewEnployee from "./Components/Views/EstablishmentPages/NewEmployee/NewEmployee";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home /> } />
                <Route path='/login' element={<Login /> } />
                <Route path='/userlogin' element={<LoginUsuario /> } />
                <Route path='/estabelecimento' exact element={<HomeEstablishment /> } />
                <Route path='/novoestabelecimento' exact element={<NewEstCard /> } />
                <Route path='/novoservico' exact element={<NewServiceCard /> } />
                <Route path='/novofuncionario' exact element={<NewEnployee /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;