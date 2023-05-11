import {HashRouter, Routes, Route} from "react-router-dom";

import Header from "./header";
import Myhome from "./home";
import ManageProduct from "./manageproduct";
import Register from "./register";
import ManageBill from "./managebill";
import EditProfile from "./editprofile";

const AdminApp = () =>{
    return(
        <HashRouter>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Myhome/> } /> 
                <Route exact path="/manageproduct" element={<ManageProduct/>} /> 
                <Route exact path="/register" element={<Register/>} />
                <Route exact path="/managebill" element={<ManageBill/>} />
                <Route exact path="/edit" element={<EditProfile/>} />
            </Routes>
        </HashRouter>
    )
}

export default AdminApp;