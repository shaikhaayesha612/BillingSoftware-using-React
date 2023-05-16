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
                        Billing system software is an accounting application that can be utilized to automate and streamline invoice processing and payment services. 
                        Organizations may use billing software to make it easier to charge consumers for the products and services they have received.
                        Billing software allows you to track the products and services your customers use, generate and send invoices with, and receive payments. 
                        However, some billing platforms are capable of much more. 
                        They can automate the repetitive tasks your finance team struggles with on a daily basis.
                        Unleash your team's efficiency with this Billing Software suite of accounts payable solutions and 
                        say goodbye to filing cabinets and lost invoices. 
                        Accounts payable process automation with this Billing Software frees your team from the manual AP tasks
                        that are slowing down your business, all while giving you greater control over your spend management with the click of a button.
                    </p>
                    </div>
                </div>

                <div className="row mb-5 text-center">
                    <div className="col-lg-4">
                        <div className="p-4 border rounded">
                            <i class="fa-solid fa-computer fa-4x text-primary"></i>
                            <h3 className="text-warning"> Computer Billing System </h3>
                            <p className="text-secondary fw-bold">
                                Our Billing Software Solution provides computer billing system over a paper billing system.
                                An invoice information is available for access 24/7. 
                                You have the flexibility to view data at any time and operate more efficiently 
                                as manual activities can be eliminated. 
                                You may view invoice statuses remotely from any connected device.
                            </p>
                        </div>
                    </div> 

                    <div className="col-lg-4">
                        <div className="p-4 border rounded">
                            <i class="fa-solid fa-file-invoice fa-4x text-primary"></i>
                            <h3 className="text-warning"> Paperless Billing Transaction</h3>
                            <p className="text-secondary fw-bold">
                                Our Billing Software Solution provides Paperless Billing within a very short-time. 
                                So you can save your time for creating manual paper billing. 
                                This solution can give you access for 24 hours a day, seven days a week, 
                                real-time information on invoice statuses from any connected device, 
                                at any time.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="p-4 border rounded">
                            <i className="fa fa-desktop fa-4x text-primary"></i>
                            <h3 className="text-warning"> Automated Billing System </h3>
                            <p className="text-secondary fw-bold">
                                Our Billing Software Solution can provide automated billing system 
                                that will allow them to pay their vendors more quickly. 
                                It gives the Automated Solution in the billing like applying GST, applying discount
                                and calculation of total payble amount. 
                                And also it gives the facility to download the automatically generated invoice. 
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-lg-12 text-center">
                    <h5 className="text-danger"> Any Services Required ? +91-9999999999 </h5>
                    </div>
                </div>

                <div className="row mt-4 mb-4">
                    <div className="col-lg-12 text-center">
                        <h2 className="text-warning"> Our Services Provides Billing Solutions For</h2> 
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