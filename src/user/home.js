
import { Carousel } from "bootstrap";
import { useState, useEffect } from "react";
import React from "react";

const Myhome = () =>{

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
            {/* banner start */}
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://ccbill.com/wp-content/uploads/2020/03/billing-and-invoicing.png" height="500" width="100%"/>
                    </div>

                    <div className="carousel-item">
                        <img src="https://busy.in/Images/gst-biil-1.webp" height="500" width="100%"/>
                    </div>

                    <div className="carousel-item">
                    <img src="https://www.chargebee.com/blog/wp-content/uploads/2013/11/Subscription-Billing-Software-Features-Banner.png" height="500" width="100%"/>
                    </div>

                </div>
        
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>
            {/* banner end */}

            <section className="p-5">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-lg-12">
                            <h1 className="text-danger mt-3 mb-2"> Billing Software Solutions </h1>
                            <p className="text-secondary fw-bold fs-6">
                            Billing system software is an accounting application that can be utilized 
                            to automate and streamline invoice processing and payment services. 
                            </p>
                            <p className="text-secondary fw-bold fs-6">
                            Organizations may use billing software to make it easier to charge consumers 
                            for the products and services they have received. 
                            </p>
                            <p className="text-secondary fw-bold fs-6">
                            Billing software allows you to track the products and services your customers use, 
                            generate and send invoices with, and receive payments. 
                            However, some billing platforms are capable of much more. 
                            They can automate the repetitive tasks your finance team struggles with on a daily basis.
                            </p>
                            <p className="text-secondary fw-bold fs-6">
                            Unleash your team's efficiency with this Billing Software suite of accounts payable solutions and 
                            say goodbye to filing cabinets and lost invoices. 
                            Accounts payable process automation with this Billing Software frees your team from the manual AP tasks
                            that are slowing down your business, 
                            all while giving you greater control over your spend management with the click of a button.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-9">
                            <h3 className="text-success"> Benefits of using Billing Software Solutions</h3>
                            <div className="row mt-5">
                                <div className="col-lg-3 mb-3"> 
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCwLuOf8qwYSBaDLLHjI2Y5VddQHOrwFku8A&usqp=CAU" height="180"/> 
                                    <h5 className="text-center text-warning mt-2"> Reduce Costs </h5>
                                    <p>
                                        No more wasted efforts signing, stuffing, 
                                        stamping and sending stacks of paper checks. 
                                        Review, code and approve payments with a few clicks.
                                    </p>
                                </div>
                                <div className="col-lg-3 mb-3"> 
                                    <img src="https://nexussystems.com/wp-content/uploads/2022/10/Scale-Easily-400x417-1.webp" height="180"/> 
                                    <h5 className="text-center text-warning mt-2"> Scale For Growth </h5>
                                    <p>
                                        Savings from eliminating the hard costs associated with paper payments 
                                        allow your current team to keep up with a growing workload.
                                    </p>
                                </div>
                                <div className="col-lg-3 mb-3"> 
                                    <img src="https://c8.alamy.com/zooms/9/20db7967ba2544d497b25fba38cc7d01/2df6p5c.jpg" height="180"/> 
                                    <h5 className="text-center text-warning mt-2"> Work Remotely </h5>
                                    <p>
                                        Our Billing Software platform provides online access 24 hours a day, 
                                        seven days a week so you have flexibility when you need it.
                                    </p>
                                </div>
                                <div className="col-lg-3 mb-3"> 
                                    <img src="https://www.bitventure.co.za/wp-content/uploads/2020/03/PREVENT-FRAUD-768x638@2x.png" height="180"/> 
                                    <h5 className="text-center text-warning mt-2"> Reduce Fraud </h5>
                                    <p>
                                        Enhance your financial security by leveraging e-payment adoption, 
                                        while providing your vendors with flexible payment options.
                                    </p>
                                </div>
                            </div>
                        </div> 

                        <div className="col-lg-3 text-center mt-5">
                            <h3 className="text-center text-warning mt-5 mb-4"> Contact Us </h3>
                            <div className="bg-light p-3 rounded">
                                <i className="fa fa-map-marker fa-3x text-warning"></i>
                                <p className="text-dark">
                                    #123, Billing Software Solutions,
                                    Mantri Square Park, Bengaluru, Karnataka.
                                </p>
                                <p>  Mobile - 9999999999 </p>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>

            <section className="p-5 bg-light">
                <div className="container">
                    <div className="row mb-4">
                    <div className="col-lg-12 text-center">
                        <h2 className="text-danger"> Our Services </h2>
                        <h5 className="text-secondary"> Provides Billing Solutions For </h5>
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

                    {/* <div className="row mt-4">
                        <div className="col-lg-3 mb-3"> 
                            <p className="p-3 bg-white text-primary"> Website Re-Designing </p> 
                        </div>
        
                        <div className="col-lg-3 mb-3">
                            <p className="p-3 bg-white text-primary"> Logo Designing </p>
                        </div>
        
                        <div className="col-lg-3 mb-3">
                            <p className="p-3 bg-white text-primary"> Web Scrapping  </p>
                        </div>
        
                        <div className="col-lg-3 mb-3">
                            <p className="p-3 bg-white text-primary"> Digital Marketing </p>
                        </div>
        
                        <div className="col-lg-3 mb-3">
                            <p className="p-3 bg-white text-primary"> Content Writing </p>
                        </div>
        
                        <div className="col-lg-3 mb-3">
                            <p className="p-3 bg-white text-primary"> Hire & Deploy </p>
                        </div>
                    
                        <div className="col-lg-3 mb-3">
                            <p className="p-3 bg-white text-primary"> Education </p>
                        </div>
        
                        <div className="col-lg-3 mb-3">
                            <p className="p-3 bg-white text-primary"> Employment </p>
                        </div>
        
                        <div className="col-lg-3 mb-3">
                            <p className="p-3 bg-white text-primary"> Digital Marketing </p>
                        </div>
        
                        <div className="col-lg-3 mb-3">
                            <p className="p-3 bg-white text-primary"> Business Supprt </p>
                        </div>
        
                        <div className="col-lg-3 mb-3">
                            <p className="p-3 bg-white text-primary"> Customer Care </p>
                        </div>
        
                        <div className="col-lg-3 mb-3">
                            <p className="p-3 bg-white text-primary"> BPO </p>
                        </div>
                    </div> */}

                </div>
            </section>
        </>
    )
}

export default Myhome;