import { Link } from "react-router-dom";
import swal from "sweetalert";

const Header = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-dark p-3 sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand text-white fw-bold  pe-5" href="#">My Billing</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ps-5">
                            <Link className="nav-link text-white" to="/"><i className="fa fa-home"></i> Home </Link>
                        </li>
                        <li className="nav-item ps-3">
                            <Link className="nav-link text-white" to="/manageproduct"><i className="fa-brands fa-product-hunt fa-lg"></i> ManageProduct </Link>
                        </li>
                        <li className="nav-item ps-3">
                            <Link className="nav-link text-white" to="/register"><i className="fa fa-plus"></i> New Registeration </Link>
                        </li>
                        <li className="nav-item ps-3">
                            <Link className="nav-link text-white" to="/managebill"><i className="fa fa-building"></i> Manage Bill </Link>
                        </li>
                        <li className="nav-item ps-3">
                            <Link className="nav-link text-white" to="/edit"><i className="fa fa-edit"></i> Edit Profile</Link>
                        </li>
                        <li className="nav-item ps-3">
                            <Link className="nav-link text-danger" to="/login" onClick={Logout}> <i className="fa fa-power-off"></i> 
                                {localStorage.getItem('name')} Logout </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;

const Logout = () =>{
    localStorage.clear();
    //window.location.href="http://localhost:3000/#/";
    swal({
        title: "Success!",
        text : "You have logged out successfully !",
        icon : "success", 
        timer: 3000,
        confirnButtonText : "OK",
    }).then(function(){
        window.location.reload(); 
    });
      
}