import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import PdfDownlode from "./PdfDownloade";

const ManageBill = () =>{
    let[data, updatedata] = useState([]);
  //To get data i.e. Listing the data

    const getBill = () =>{
        let input = {
            "key":localStorage.getItem("key")
        };
        const requestOptions = {
            method : 'POST',
            header : {'Content-Type' : 'application/json' },
            body : JSON.stringify(input) 
        };

        fetch("https://www.campusinterview.in/webapi/Billing/getmybill", requestOptions)
        .then(response => response.json())
        .then(array =>{            
            updatedata(array);
        })  
    }

    useEffect(()=>{
        getBill();
    },[1]);


    let [keyword, updateKeyword] = useState("");

    //pagination start
    const PER_PAGE = 5;
    const [currentPage, setCurrentPage] = useState(0);
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage)
    }
    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(data.length / PER_PAGE);
    // pagination end 

    let totalFee = 0;
    let gst = 0;
    let totalAmount = 0;

    data.map((dinfo, index)=>{
        totalFee = totalFee + parseInt(dinfo.amount);
        gst = gst + parseInt(dinfo.amount *18 /100);
        totalAmount = totalFee + gst;
    })


    return(
        <section>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-lg-4">
                        <h1 className="text-primary text-center fw-bold"> Manage Bill </h1>
                    </div>
                    <div className="col-lg-8"></div>
                </div>

                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-8">
                        <button className="btn btn-primary"><a href="#" className="text-white"> 2018-2019 </a></button>
                        <button className="btn btn-primary ms-1"><a href="#" className="text-white"> 2019-2020 </a></button>
                        <button className="btn btn-primary ms-1"><a href="#" className="text-white"> 2020-2021 </a></button>
                        <button className="btn btn-primary ms-1"><a href="#" className="text-white"> 2021-2022 </a></button>
                        <button className="btn btn-primary ms-1"><a href="#" className="text-white"> 2022-2023 </a></button>
                        <button className="btn btn-primary ms-1"><a href="#" className="text-white"> 2023-2024 </a></button>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-lg-2">
                        <div className="row">
                            <div className="col-lg-3">Show</div>
                            <div className="col-lg-6">
                                <select className="form-select">
                                    <option value="">10</option>
                                    <option value="">20</option>
                                    <option value="">30</option>
                                    <option value="">40</option>
                                </select>
                            </div>
                            <div className="col-lg-3">enties</div>
                        </div>
                    </div>
                    <div className="col-lg-7"></div>
                    <div className="col-lg-3">
                        <div className="row">
                            <div className="col-lg-3"> Search: </div>
                            <div className="col-lg-9">
                                <input type="text" className="form-control"
                                 onChange={obj => updateKeyword(obj.target.value)}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-lg-12">
                        <table className="table table-bordered">
                            <thead>
                                <tr className="bg-light">
                                    <th> # <i class="fa-solid fa-sort-up text-primary float-end"></i></th>
                                    <th> Name <i class="fa-solid fa-sort text-secondary float-end"></i></th>
                                    <th> Mobile <i class="fa-solid fa-sort text-secondary float-end"></i></th>
                                    <th> Email <i class="fa-solid fa-sort text-secondary float-end"></i></th>
                                    <th> Product <i class="fa-solid fa-sort text-secondary float-end"></i></th>
                                    <th> Fee <i class="fa-solid fa-sort text-secondary float-end"></i></th>
                                    <th> GST <i class="fa-solid fa-sort text-secondary float-end"></i></th>
                                    <th> Total <i class="fa-solid fa-sort text-secondary float-end"></i></th>
                                    <th> Date <i class="fa-solid fa-sort text-secondary float-end"></i></th>
                                    <th> Action <i class="fa-solid fa-sort text-secondary float-end"></i></th>
                                </tr>
                            </thead>
                            <tbody>
                                    {
                                        data.filter(post => {
                                            // if (post.name.toLowerCase().includes(keyword.toLowerCase())) {
                                            //     return post;
                                            // }
                                            if(post.name.includes(keyword) ||
                                               post.mobile.includes(keyword) ||
                                               post.email.toLowerCase().includes(keyword.toLowerCase()) )
                                               {
                                                return post;
                                               }
                                        })
                                        .slice(offset, offset + PER_PAGE).map((dinfo, index) =>{
                                            return(
                                                <tr key={index}>
                                                    <td> {dinfo.id} </td>
                                                    <td> {dinfo.name} </td>
                                                    <td> {dinfo.mobile} </td>
                                                    <td> {dinfo.email} </td>
                                                    <td> {dinfo.product} </td>
                                                    <td> {dinfo.amount} </td>
                                                    {/* <td> {dinfo.amount*18/100} </td> */}
                                                    <td> {dinfo.gst} </td>
                                                    {/* <td> {parseInt(dinfo.amount)+parseInt(dinfo.amount)*18/100} </td> */}
                                                    <td> {dinfo.total} </td>
                                                    <td> 
                                                        {dinfo.day}/{dinfo.month}/{dinfo.year}
                                                    </td> 
                                                    <td>
                                                        <PdfDownlode className="btn btn-danger" data={dinfo} />
                                                    </td>  
                                                </tr>
                                            )
                                        })
                                    }
                                
                                <tr className="bg-light">
                                    <td> Showing 0 to 0 of 0 entries </td>
                                    <td colspan="9" className="text-end">
                                        <ReactPaginate
                                            previousLabel={"Previous"}
                                            nextLabel={"Next"}
                                            breakLabel={"..."}
                                            pageCount={pageCount}
                                            marginPagesDisplayed={2}
                                            pageRangeDisplayed={3}
                                            onPageChange={handlePageClick}
                                            containerClassName={"pagination  justify-content-center"}
                                            pageClassName={"page-item "}
                                            pageLinkClassName={"page-link"}
                                            previousClassName={"page-item"}
                                            previousLinkClassName={"page-link"}
                                            nextClassName={"page-item"}
                                            nextLinkClassName={"page-link"}
                                            breakClassName={"page-item"}
                                            breakLinkClassName={"page-link"}
                                            activeClassName={"active primary"}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="row text-center fw-bold">
                    <div className="col-lg-4 text-danger"> Total: {totalFee} </div>
                    <div className="col-lg-4 text-info"> Total GST:{gst} </div>
                    <div className="col-lg-4 text-success"> Grand Total:{totalAmount} </div>
                </div>

            </div>
        </section>        
    )
}

export default ManageBill;