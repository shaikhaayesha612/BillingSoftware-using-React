import {Link} from "react-router-dom";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const Publicheader = () =>{
    let[modalState, setModalState] = useState(false);
    let callModal  = () =>{
        setModalState(!modalState);
    }

    return(
        <>
            {/* modal starts here */}
            <Modal show={modalState} onHide={callModal}>
                <Modal.Header closeButton className="modal-header bg-info text-white p-3">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Send Your Message</h1>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    <div className="mb-3">
                        <label>Enter Your Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label>Enter Mobile No</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label>Enter e-Mail Id</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label>Enter Message</label>
                        <textarea className="form-control"></textarea>
                    </div>
                </Modal.Body>

                <Modal.Footer className="modal-footer justify-content-center">
                    <Button type="button" className="btn btn-danger">Send Request <i className="fa fa-arrow-right"></i></Button>
                </Modal.Footer>
            </Modal>
            {/* modal ends here */}
            
            <section className="bg-info p-2 text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6  col-md-6 col-sm-6 col-6">
                            <i className="fa fa-headset"></i> +91-8884166608
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6  col-md-6 col-sm-6 col-6 text-end">
                                <i className="fab fa-facebook "></i>
                                <i className="fab fa-twitter ms-1"></i>
                                <i className="fab fa-linkedin ms-1"></i>
                                <i className="fab fa-instagram ms-1"></i>
                        </div>
                    </div>
                </div>
            </section>

            {/* top nav start */}
            <nav className="navbar navbar-expand-md navbar-dark sticky-top bg-dark p-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <i className="fa fa-search fa-lg"></i> Billing Software
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item ps-4">
                                <Link className="nav-link active" to="/#"><i className="fa fa-home"></i> Home</Link>
                            </li>
                            <li className="nav-item ps-4">
                                <Link className="nav-link active" to="/services"><i className="fa fa-tools"></i> Our Services</Link>
                            </li>
                            <li className="nav-item ps-4">
                                <Link className="nav-link active" to="/login"><i className="fa fa-lock"></i> Login</Link>
                            </li>
                            <li className="nav-item ps-4">
                                <Link className="nav-link active" to="/account"><i className="fa fa-user-plus"></i> Create Account</Link>
                            </li>
                            <li className="nav-item ps-4">
                                <Link className="nav-link active" href="#" onClick={callModal} >
                                    <i className="fa fa-headset"></i> Contact Us
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-danger text-white" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            {/* top nav end */}
        </>
    )
}

export default Publicheader;