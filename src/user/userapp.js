import {HashRouter, Routes, Route} from "react-router-dom"

import Publicheader from "./publicheader";
import Myhome from "./home";
import Ourservices from "./services";
import Login from "./login";
import Account from "./account";
import Footer from "./footer";

const UserApp = () =>{
    return(
        <HashRouter>
            <Publicheader/>
            <Routes>
                <Route exact path="/" element={<Myhome/> } />
                <Route exact path="/services" element={<Ourservices/> } />
                <Route exact path="/login" element={<Login/> } />
                <Route exact path="/account" element={<Account/> } />                
            </Routes>
            <Footer/>
        </HashRouter>
    )
}

export default UserApp;