import React from "react";
import { useState } from "react";

const Account = () =>{

    let [fname, pickFname] = useState("");
    let [lname, pickLname] = useState("");
    let [email, pickEmail] = useState("");
    let [mobile, pickMobile] = useState("");
    let [password, pickPassword] = useState("");
    let [cpasaword, pickCpassword] = useState("");
    let [address, pickAddress] = useState("");

    let[msg, updatemsg] = useState("");
    
    const register = () =>{
        if (fname === "") {
            updatemsg("this field is requerd*")
          }
          else if(lname === ""){
            updatemsg("this field is requerd*")
          }
          else if(email === ""){
            updatemsg("this field is requerd*")
          }
          else if(mobile === ""){
            updatemsg("this field is requerd*")
          }
          else if(password === ""){
            updatemsg("this field is requerd*")
          }
          else if(cpasaword === ""){
            updatemsg("this field is requerd*")
          }
          else{
        
            let input = {
                fname:fname, 
                lname:lname,
                email:email, 
                password:password, 
                mobile:mobile, 
                address:address
            };

            const requestOptions = {
                method : 'POST',
                header : {'Content-Type' : 'application/json' },
                body : JSON.stringify(input) 
            };

            fetch("https://www.campusinterview.in/webapi/billing/register", requestOptions)
            .then(response => response.text())
            .then(data =>{            
                alert("Your account has been created !");
            })
        }

    }

    return(
        <>
            <section className="container mt-5">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h1 className="text-info"> 
                            <i className="fa fa-user-plus"></i> Create New Account 
                        </h1>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-lg-3"></div>

                    <div className="col-lg-6">
                        <div className="card border-0 shadow-lg mb-5">
                            <div className="card-header"> Enter Your Details </div>

                            <div className="card-body"> 
                                <div className="row mb-3">
                                    <div className="col-lg-6">
                                        <label>First Name</label> <i className="mandatory">*</i>
                                        <input type="text" className="form-control" value={fname}
                                        onChange={obj=>pickFname(obj.target.value)}/>
                                        <i className="text-danger">{msg}</i>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Last Name</label> <i className="mandatory">*</i>
                                        <input type="text" className="form-control" value={lname}
                                        onChange={obj=>pickLname(obj.target.value)}/>
                                        <i className="text-danger">{msg}</i>
                                    </div>
                                </div> 
                                <div className="row mb-3">
                                    <div className="col-lg-6">
                                        <label>e-Mail id</label> <i className="mandatory">*</i>
                                        <input type="email" className="form-control" value={email}
                                        onChange={obj=>pickEmail(obj.target.value)}/>
                                        <i className="text-danger">{msg}</i>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Mobile No</label> <i className="mandatory">*</i>
                                        <input type="number" className="form-control" value={mobile}
                                        onChange={obj=>pickMobile(obj.target.value)}/>
                                        <i className="text-danger">{msg}</i>
                                    </div>
                                </div> 

                                <div className="row mb-3">
                                    <div className="col-lg-6">
                                        <label>Password</label> <i className="mandatory">*</i>
                                        <input type="password" className="form-control" value={password}
                                        onChange={obj=>pickPassword(obj.target.value)}/>
                                        <i className="text-danger">{msg}</i>
                                    </div>
                                    <div className="col-lg-6">
                                        <label>Confirm Password</label> <i className="mandatory">*</i>
                                        <input type="password" className="form-control" value={cpasaword}
                                        onChange={obj=>pickCpassword(obj.target.value)}/>
                                        <i className="text-danger">{msg}</i>
                                    </div>
                                </div> 
                            
                                <div className="row">
                                    <div className="col-lg-12">
                                        <label>Full Address</label>
                                        <textarea className="form-control" value={address}
                                        onChange={obj=>pickAddress(obj.target.value)}></textarea>
                                        <i className="text-danger">{msg}</i>
                                    </div>
                                </div>
                            </div>

                            <div className="card-footer text-center">
                                <button className="btn btn-danger" onClick={register}> Register </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3"></div>

                </div>
          </section>
        </>
    )
}

export default Account;