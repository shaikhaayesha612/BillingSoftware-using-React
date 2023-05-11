import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const EditProfile = () => {
    let [msg, updatemsg] = useState("")
    let [company, pickCompany] = useState("");
    let [editContactPerson, pickEditContactPerson] = useState("");
    let [email, pickEmail] = useState("");
    let [mobile, pickMobile] = useState("");
    let [password, pickPassword] = useState("");
    let [address, pickAddress] = useState("");
    let [city, pickCity] = useState("");
    let [website, pickWebsite] = useState("");
    let [profile, pickProfile] = useState("");
    let [businesstype, PickBusinesstype] = useState("");

    let[bdata, updateBdata] = useState([]);

    const getProfile = () => {
        let input = {
            key: localStorage.getItem("key")
        };
        const requestOptions = {
            method: 'POST',
            header: { 'Content-Type': 'application/json' },
            body: JSON.stringify(input)
        };
        fetch("https://www.campusinterview.in/webapi/Billing/editprofile", requestOptions)
            .then(response => response.json())
            .then(data => {
                // updateData(data)
                console.log(data)
                pickCompany(data.company)
                pickEditContactPerson(data.contactperson)
                pickEmail(data.email)
                pickMobile(data.mobile)
                pickPassword(data.password)
                pickAddress(data.address)
                pickCity(data.city)
                pickWebsite(data.website)
                pickProfile(data.profile)
                PickBusinesstype(data.businesstype)
            })
    }
    const updateprofile = () => {
        let input = {
            key: localStorage.getItem("key"),
            company: company,
            email: email,
            mobile: mobile,
            city: city,
            address: address,
            contactperson: editContactPerson,
            // "phone":"",
            website: website,
            profile: profile,
            businesstype: businesstype,
            password: password
        };
        const requestOptions = {
            method: 'POST',
            header: { 'Content-Type': 'application/json' },
            body: JSON.stringify(input)
        };
        fetch("https://www.campusinterview.in/webapi/billing/updateprofile", requestOptions)
            .then(response => response.text())
            .then(data => {
                //alert(data);
                Swal.fire({
                    title: "Success !",
                    text: data,
                    icon: "success"
                });
            })
    }



    const allservice = () =>{
        let input = {
            "key": localStorage.getItem("key")
        };
        const requestOptions = {
            method : 'POST',
            header : {'Content-Type' : 'application/json' },
            body : JSON.stringify(input) 
        };
        fetch("https://www.campusinterview.in/webapi/Billing/allservice", requestOptions)
        .then(response => response.json())
        .then(data =>{            
            updateBdata(data);
        })
        
    }

    useEffect(() => {
        getProfile();
        allservice();
    }, [1]);


    return (
        <section className="container mt-5">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1 className="text-primary">
                        <i className="fa fa-edit"></i> Edit Profile
                    </h1>
                    <p className="text-danger fw-italic">{msg}</p>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-3"></div>
                
                <div className="col-lg-6">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header"> Enter Your Details </div>

                        <div className="card-body">
                            <div className="row mb-3">
                                <div className="col-lg-">
                                    <label>Company</label>
                                    <input id="fname" type="text" className="form-control" value={company}
                                     onChange={obj => pickCompany(obj.target.value)} />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-lg-6">
                                    <label>e-Mail id </label>
                                    <input disabled type="email" className="form-control" value={email} 
                                     onChange={obj => pickEmail(obj.target.value)} />
                                </div>
                                <div className="col-lg-6">
                                    <label>Mobile No</label>
                                    <input disabled type="number" className="form-control" value={mobile}
                                     onChange={obj => pickMobile(obj.target.value)} />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-lg-6">
                                    <label>Password</label>
                                    <input type="text" className="form-control" value={password}
                                     onChange={obj => pickPassword(obj.target.value)} />
                                </div>
                                <div className="col-lg-6">
                                    <label>Contact Person</label>
                                    <input type="text" className="form-control" value={editContactPerson}
                                     onChange={obj => pickEditContactPerson(obj.target.value)} />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-lg-6">
                                    <label>City</label>
                                    <input type="text" className="form-control" value={city} 
                                     onChange={obj => pickCity(obj.target.value)} />
                                </div>
                                <div className="col-lg-6">
                                    <label>Website</label>
                                    <input type="text" className="form-control" value={website} 
                                     onChange={obj => pickWebsite(obj.target.value)} />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-lg-6">
                                    <label>Profile</label>
                                    <input type="text" className="form-control" value={profile} 
                                     onChange={obj => pickProfile(obj.target.value)} />
                                </div>
                                <div className="col-lg-6">
                                    <label>Business Type</label>
                                    <select className="form-select" value={businesstype} 
                                     onChange={obj => PickBusinesstype(obj.target.value)}>
                                        <option> {businesstype} </option>
                                        {
                                            bdata.map((binfo, index) =>{
                                                return(
                                                    <option key={index} > {binfo.servicename} </option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <label>Full Address</label>
                                    <textarea className="form-control" value={address} 
                                     onChange={obj => pickAddress(obj.target.value)} ></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="card-footer text-center">
                            <button className="btn btn-danger"onClick={updateprofile}> Submit </button>
                        </div>
                    </div>

                </div>
                <div className="col-lg-3"></div>
            </div>
        </section>
    )
}
export default EditProfile;