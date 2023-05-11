import React from "react";
import { useState } from "react";
import swal from "sweetalert";
import Swal from "sweetalert2";

const Login = () =>{

    let[email, pickEmail] = useState("");
    let[password, pickPassword] = useState("");
    let[msg, updatemsg] = useState("Enter Your Login Details");

    let goLogin = () =>{
        let formstatus = true;
        if (email == "" || password == "") {
            updatemsg("Please Enter Email or Password")
            formstatus = false;
        }
        // if(email == ""){
        //     updatemsg("Please Enter Email")
        //     formstatus = false;
        // }
        // if(password == ""){
        //     updatemsg("Please Enter Password")
        //     formstatus = false;
        // }

        if (formstatus == true) {
            let input = {
                email:email,
                password:password
            };
            
            const requestOptions = {
                method : 'POST',
                header : {'Content-Type' : 'application/json' },
                body : JSON.stringify(input) 
            };

            fetch("https://www.campusinterview.in/webapi/Login/logincheck", requestOptions)
            .then(response => response.json())
            .then(responseArray =>{        
                if(responseArray.status=="SUCCESS"){
                    updatemsg("Success : Redirecting...");
                    localStorage.setItem("key", responseArray.key);
                    localStorage.setItem("name", responseArray.name);
                    
                    // alert("You have logged in successfully !");
                    swal({
                        title: "Suceess!",
                        text: "You have logged in successfully!",
                        icon: "success",
                        timer: 3000,
                        button: "OK!",
                      }).then(function(){
                        window.location.reload(); 
                    });
                    
                   
                }else{
                    //alert("invalid or not exists");
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!'
                      }) 
                }
            })
        }
    }


    return(
        <>
            <section className="container mt-4">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h1 className="text-info">
                            <i className="fa fa-lock"></i> Login 
                        </h1>
                        <p className="text-center text-danger">{msg}</p>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <div className="card border-0 shadow-lg mb-5">
                            <div className="card-header"> Please Login </div>

                            <div className="card-body">
                                <div className="mb-3">
                                    <label>E-Mail Id</label> <i className="mandatory">*</i>
                                    <input type="email" className="form-control" 
                                     onChange={obj => pickEmail(obj.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label>Password</label> <i className="mandatory">*</i>
                                    <input type="password" className="form-control" 
                                     onChange={obj => pickPassword(obj.target.value)} />
                                </div>
                            </div>

                            <div className="card-footer text-center">
                                <button className="btn btn-danger" type="button" onClick={goLogin}> Login </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4"></div>

                </div>
            </section>
        </>
    )
}

export default Login;