import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Register = () =>{

    let[name, pickName] = useState("");
    let[mobile, pickMobile] = useState("");
    let[email, pickEmail] = useState("");
    let[product, pickProduct] = useState("");
    let[cost, pickCost] = useState("");
    let[gst, pickGst] = useState("");
    let[total, pickTotal] = useState("");
    let[gstno, pickGstno] = useState("");
    let[day, pickDay] = useState("");
    let[month, pickMonth] = useState("");
    let[year, pickYear] = useState("");
    let[discount, pickDiscount] = useState("");
    
    // Validation
    let[nameError, updateNameError] = useState("");
    let[mobileError, updateMobileError] = useState("");
    let[emailError, updateEmailError] = useState("");
    let[costError, updateCostError] = useState("");

    let[pdata, updatePdata] = useState([]);

    const submit = () =>{
        let formstatus = true;
        if(name == ""){
            updateNameError("This field is mandatory");
            formstatus = false;
        }
        else{
            updateNameError();
        }


        let mpattern = /^[0]?[6789]\d{9}$/;

        if( ! mpattern.test(mobile)){
            updateMobileError("Invalid Mobile No.");
            formstatus = false;
        }
        else{
            updateMobileError();
        }

        var epattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if( ! epattern.test(email)){
            updateEmailError("Invalid Email");
            formstatus = false;
        }
        else{
            updateEmailError("");
        }

        if(cost == ""){
            updateCostError("This field is mandatory");
            formstatus = false;
        }
        else{
            updateCostError();
        }

        //To Save data
        if(formstatus == true){
            let input = {                   
                name: name,
                mobile: mobile,
                email: email,           
                product: product,               
                amount: cost,
                gst: gst,
                total: total,
                gstno: gstno,
                day: day,
                month: month,
                year: year,
                key: localStorage.getItem("key")
            };

            const requestOptions = {
                method : 'POST',
                header : {'Content-Type' : 'application/json' },
                body : JSON.stringify(input) 
            };

            let url= "https://www.campusinterview.in/webapi/Billing/savebill";
            fetch(url, requestOptions)
            .then(response => response.text())
            .then(data =>{            
                //alert(data);
        
                Swal.fire({
                    title: "Success!",
                    text : "You record has been submitted successfully !",
                    icon : "success", 
                    timer: 3000,
                    confirnButtonText : "OK",
                });
            })
        }    
    }


    // GST & Total Amount Calculation  
    gst = parseFloat(cost * 18/100);
    total = parseFloat(cost) + parseFloat(gst);

    // Fetching Products
    const allproduct = () =>{
        let input = {
            "key": localStorage.getItem("key")
        };
        const requestOptions = {
            method : 'POST',
            header : {'Content-Type' : 'application/json' },
            body : JSON.stringify(input) 
        };
        fetch("https://www.campusinterview.in/webapi/Billing/allproduct", requestOptions)
        .then(response => response.json())
        .then(data =>{            
            updatePdata(data);
        })
    }

    useEffect(() =>{
        allproduct();
    }, [1]);

    // Fetch Price automatically after selecting the product 
    const getfees = (dataid) =>{
        pdata.map((data1, index) =>{
            if(dataid === data1.pid){
                pickCost(data1.price);
                pickProduct(data1.productname);
            }
        })
    }
   

     //Calculation of Discount
    const calDiscount = () =>{
        // cost = cost - parseFloat(cost * discount /100);
        // gst = parseFloat(cost * 18/100);
        // total = parseFloat(cost) + parseFloat(gst);     
        let totaldiscount = cost - parseFloat(cost * discount/100);
        pickCost(totaldiscount);
        gst = parseFloat(cost * 18/100);
        total = parseFloat(cost) + parseFloat(gst);
    }

    const reload = () =>{
        pickName("");
        pickMobile("");
        pickEmail("");
        pickProduct("");
        pickCost("");
        pickGst("");
        pickDay("");
        pickMonth("");
        pickYear("");
        pickTotal("");
        pickGstno("");
        pickDiscount("");
    }
   
    
    
        
    return(
        <section>
            <h1 className="text-primary text-center mt-4 fw-bold"> New Billing </h1>
            <div className="container mt-5">

                <div className="row">
                    <i className="mandatory mb-3"> * marked fields are mandatory! </i>
                    <div className="col-lg-3">
                        <div>
                            <label> Full Name </label> <i className="mandatory"> * {nameError} </i>
                            <input type="text" className="form-control" value={name} 
                              onChange={obj => pickName(obj.target.value)}/>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div>
                            <label> Mobile </label> <i className="mandatory"> * {mobileError} </i>
                            <input type="number" className="form-control" value={mobile}
                             onChange={obj =>pickMobile(obj.target.value)}/>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div>
                            <label> Email </label> <i className="mandatory"> * {emailError} </i>
                            <input type="email" className="form-control" value={email}
                             onChange={obj =>pickEmail(obj.target.value)}/>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div>
                            <label> Product </label>
                            <select className="form-select" value={product}
                             onChange={obj =>getfees(obj.target.value)}>
                                <option> {product} </option>
                                {
                                    pdata.map((dinfo, index)=>{
                                        return(
                                            <option key={index} value={dinfo.pid}> {dinfo.productname} </option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3">
                        <div>
                            <label> Total Cost </label>  <i className="mandatory"> * {costError} </i>
                            <input type="number" className="form-control bg-light" value={cost}
                             onChange={obj =>pickCost(obj.target.value)}/>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div>
                            <label> GST Amount </label>
                            <input type="number" className="form-control bg-light" value={gst}  
                             onChange={obj =>pickGst(obj.target.value)}/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-4">
                                <label> Day </label>
                                <select className="form-select" value={day}
                                 onChange={obj =>pickDay(obj.target.value)}>
                                    <option> Select </option>
                                    <option> 1 </option>
                                    <option> 2 </option>
                                    <option> 3 </option>
                                    <option> 4 </option>
                                    <option> 5 </option>
                                    <option> 6 </option>
                                    <option> 7 </option>
                                    <option> 8 </option>
                                    <option> 9 </option>
                                    <option> 10 </option>
                                    <option> 11 </option>
                                    <option> 12 </option>
                                    <option> 13 </option>
                                    <option> 14 </option>
                                    <option> 15 </option>
                                    <option> 16 </option>
                                    <option> 17 </option>
                                    <option> 18 </option>
                                    <option> 19 </option>
                                    <option> 20 </option>
                                    <option> 21 </option>
                                    <option> 22 </option>
                                    <option> 23 </option>
                                    <option> 24 </option>
                                    <option> 25 </option>
                                    <option> 26 </option>
                                    <option> 27 </option>
                                    <option> 28 </option>
                                    <option> 29 </option>
                                    <option> 30 </option>
                                    <option> 31 </option>
                                </select>
                            </div>
                            <div className="col-lg-4">
                                <label> Month </label>
                                <select className="form-select" value={month}
                                 onChange={obj =>pickMonth(obj.target.value)}>
                                    <option> Select </option>
                                    <option> 1 </option>
                                    <option> 2 </option>
                                    <option> 3 </option>
                                    <option> 4 </option>
                                    <option> 5 </option>
                                    <option> 6 </option>
                                    <option> 7 </option>
                                    <option> 8 </option>
                                    <option> 9 </option>
                                    <option> 10 </option>
                                    <option> 11 </option>
                                    <option> 12 </option>
                                </select>
                            </div>
                            <div className="col-lg-4">
                                <label> Year </label>
                                <select className="form-select" value={year}
                                 onChange={obj =>pickYear(obj.target.value)}>
                                    <option> Select </option>
                                    <option> 2023 </option>
                                    <option> 2022 </option>
                                    <option> 2021 </option>
                                    <option> 2020 </option>
                                    <option> 2019 </option>
                                    <option> 2018 </option>
                                </select>
                            </div>
                        </div>                        
                    </div>                    
                </div>

                <div className="row">
                    <div className="col-lg-3">
                        <label> Total Amount </label>
                        <input type="number" className="form-control bg-light" value={total}
                         onChange={obj =>pickTotal(obj.target.value)}/>
                    </div>
                    <div className="col-lg-4">
                        <label> GST Number </label>
                        <input type="text" className="form-control bg-light" placeholder="29AAECI4564N1ZY" value={gstno}
                         onChange={obj =>pickGstno(obj.target.value)}/>
                    </div>
                    <div className="col-lg-2">
                        <label> % Discount </label>
                        <input type="number" className="form-control" value={discount}
                         onChange={obj => pickDiscount(obj.target.value)} />
                        </div>
                        <div className="col-lg-2"> 
                            <button className="btn btn-success mt-1" onClick={calDiscount} > Click to Apply Discount </button>  
                        </div>

                    <div className="col-lg-1">
                        <button className="btn btn-danger mt-4" onClick={reload}> Reload </button>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="text-center">
                        <button className="btn btn-primary" onClick={submit}> Submit </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register;