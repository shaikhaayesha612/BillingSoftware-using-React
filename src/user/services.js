import { useState } from "react";
import { useEffect } from "react";
import React from "react";

const Ourservices = () =>{

    let [service, updateService] = useState([]);

    const allservice = () =>{
        let input = {
            key:7387397005
        };

        const requestOptions = {
            method:"POST",
            header:{'Content-Type':'application/json'},
            body:JSON.stringify(input)
        };

        fetch("https://www.campusinterview.in/webapi/Billing/allservice", requestOptions)
        .then(response => response.json())
        .then(data =>{
            updateService(data);
        })
    }

    useEffect(()=>{
        allservice();
    }, [1]);

    return(
        <>
            <section className="container mt-4">
                <div className="row mb-5">
                    <div className="col-lg-12 text-center">
                    <h1 className="text-info"> 
                        <i className="fa fa-tools"></i> Our Services 
                    </h1>
                    <p>
                        dfg dfg dfg dfg dfg dfg fdg dfg dfg dfg dfg dfg dfg dfg dfdfg dfg dfg dfg dfg dfg dfg fdg
                        dfg dfg dfg dfg dfg dfg fdg dfg dfg dfg dfg dfg dfg dfg dfdfg dfg dfg dfg dfg dfg dfg fdg
                        dfg dfg dfg dfg dfg dfg fdg dfg dfg dfg dfg dfg dfg dfg dfdfg dfg dfg dfg dfg dfg dfg fdg
                        dfg dfg dfg dfg dfg dfg fdg dfg dfg dfg dfg dfg dfg dfg dfdfg dfg dfg dfg dfg dfg dfg fdg
                        dfg dfg dfg dfg dfg dfg fdg dfg dfg dfg dfg dfg dfg dfg dfdfg dfg dfg dfg dfg dfg dfg fdg
                        dfg dfg dfg dfg dfg dfg fdg dfg dfg dfg dfg dfg dfg dfg dfdfg dfg dfg dfg dfg dfg dfg fdg
                        dfg dfg dfg dfg dfg dfg fdg dfg dfg dfg dfg dfg dfg dfg dfdfg dfg dfg dfg dfg dfg dfg fdg 
                    </p>
                    </div>
                </div>

                <div className="row mb-5 text-center">
                    <div className="col-lg-4">
                        <div className="p-4 border rounded">
                            <i className="fa fa-file fa-4x text-primary"></i>
                            <h3> Resume Building </h3>
                            <p>
                            sd sdf sdf sdf sdf sdf sdf sdf sdfsd sdf sdf sdf sdf sdf sdf sdf
                            sd sdf sdf sdf sdf sdf sdf sdf sdfsd sdf sdf sdf sdf sdf sdf sdf
                            sd sdf sdf sdf sdf sdf sdf sdf sdfsd sdf sdf sdf sdf sdf sdf sdf
                            </p>
                            <a href="">Read More...</a>
                        </div>
                    </div> 

                    <div className="col-lg-4">
                        <div className="p-4 border rounded">
                            <i className="fa fa-mobile fa-4x text-primary"></i>
                            <h3> Mobile App Development</h3>
                            <p>
                            sd sdf sdf sdf sdf sdf sdf sdf sdfsd sdf sdf sdf sdf sdf sdf sdf
                            sd sdf sdf sdf sdf sdf sdf sdf sdfsd sdf sdf sdf sdf sdf sdf sdf
                            sd sdf sdf sdf sdf sdf sdf sdf sdfsd sdf sdf sdf sdf
                            </p>
                            <a href="">Read More...</a>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="p-4 border rounded">
                            <i className="fa fa-desktop fa-4x text-primary"></i>
                            <h3> Website Development</h3>
                            <p>
                            sd sdf sdf sdf sdf sdf sdf sdf sdfsd sdf sdf sdf sdf sdf sdf sdf
                            sd sdf sdf sdf sdf sdf sdf sdf sdfsd sdf sdf sdf sdf sdf sdf sdf
                            sd sdf sdf sdf sdf sdf sdf sdf sdfsd sdf sdf sdf sdf sdf sdf sdf
                            </p>
                            <a href="">Read More...</a>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-lg-12 text-center">
                    <h1 className="text-danger"> Any Services Required ? +91-8792462607 </h1>
                    </div>
                </div>

                <div className="row mt-3">
                    {
                        service.map((serinfo, index) =>{
                            return(
                                <div className="col-lg-3" key={index}>
                                    <div className="border m-2 p-3 bg-light">
                                        <h6 className="text-success"> {serinfo.servicename} </h6>
                                    </div>
                                </div>
                            )
                        })    
                    }
                </div>


 {/*            <div className="row mt-4 myservice">
                    
                    <div className="col-lg-3 mb-3">
                        <p className="p-3 bg-light text-primary"> Logo Designing </p>
                    </div>

                    <div className="col-lg-3 mb-3">
                        <p className="p-3 bg-light text-primary"> Web Scrapping  </p>
                    </div>

                    <div className="col-lg-3 mb-3">
                        <p className="p-3 bg-light text-primary"> Digital Marketing </p>
                    </div>

                    <div className="col-lg-3 mb-3">
                        <p className="p-3 bg-light text-primary"> Content Writing </p>
                    </div>

                    <div className="col-lg-3 mb-3">
                        <p className="p-3 bg-light text-primary"> Hire & Deploy </p>
                    </div>
                
                    <div className="col-lg-3 mb-3">
                        <p className="p-3 bg-light text-primary"> Education </p>
                    </div>

                    <div className="col-lg-3 mb-3">
                        <p className="p-3 bg-light text-primary"> Employment </p>
                    </div>

                    <div className="col-lg-3 mb-3">
                        <p className="p-3 bg-light text-primary"> Digital Marketing </p>
                    </div>

                    <div className="col-lg-3 mb-3">
                        <p className="p-3 bg-light text-primary"> Business Supprt </p>
                    </div>

                    <div className="col-lg-3 mb-3">
                        <p className="p-3 bg-light text-primary"> Customer Care </p>
                    </div>

                    <div className="col-lg-3 mb-3">
                        <p className="p-3 bg-light text-primary"> BPO </p>
                    </div>
                </div>
 */}
            </section>
        </>
    )
}

export default Ourservices;