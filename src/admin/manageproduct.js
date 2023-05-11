import { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import ReactPaginate from "react-paginate";

const ManageProduct = () =>{

    let [productname, pickProductname] = useState("");
    let [price, pickPrice] = useState("");
    let [qty, pickQty] = useState("");
    let [msg, updatemsg] = useState("");
    let [data, updateData] = useState([]);

    // Save New Product
    const saveproduct = () =>{
       
        let formstatus = true;
        if(productname == "" || price == "" || qty == ""){
            updatemsg("Please Enter all the details");
            formstatus = false;
        }

        if(formstatus == true){
            let input = {
                "key": localStorage.getItem("key"),
                productname: productname,
                price: price,
                qty: qty
            };
            const requestOptions = {
                method : 'POST',
                header : {'Content-Type' : 'application/json' },
                body : JSON.stringify(input) 
            };
            fetch("https://www.campusinterview.in/webapi/Billing/saveproduct", requestOptions)
            .then(response => response.text())
            .then(message =>{      
                toast.success("Product Added Successfully !", {
                    position: toast.POSITION.TOP_LEFT,
    
                });      
                //toast("Product Added Successfully !");
            })
        }
    }

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
            updateData(data);
        })
    }

    useEffect(() =>{
        allproduct();
    }, [1]);

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


    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <ToastContainer/>
                    <div className="col-lg-4 mt-5">
                        <p className="text-danger text-center mb-4"> <i> {msg} </i> </p>
                        <div className="card shadow-lg">
                            <div className="card-header bg-dark">
                                <h5 className="text-white text-center"> Add New Product </h5>
                            </div>

                            <div className="card-body">
                                <div>
                                    <label> Product Name </label>
                                    <input type="text" className="form-control" value={productname}
                                     onChange={obj => pickProductname(obj.target.value)}/>
                                </div>
                                <div className="mt-2">
                                    <label> Price </label>
                                    <input type="text" className="form-control" value={price}
                                     onChange={obj => pickPrice(obj.target.value)}/>
                                </div>
                                <div className="mt-2">
                                    <label> Quantity </label>
                                    <input type="text" className="form-control" value={qty}
                                     onChange={obj => pickQty(obj.target.value)}/>
                                </div>
                            </div>
                            
                            <div className="card-footer text-center">
                                <button className="btn btn-danger" onClick={saveproduct}> Save </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-1"></div>   
                        
                    <div className="col-lg-7">
                        <div className="row mb-4">
                            <div className="col-lg-8">
                                <h3 className="text-center text-primary fw-bold"> Product List </h3>
                            </div>
                            <div className="col-lg-4">
                                <input type="text" className="form-control" placeholder="Search"
                                 onChange={obj => updateKeyword(obj.target.value)}/>
                            </div>
                        </div>

                            <div className="row">
                            <table className="table table-bordered shadow-sm">
                                <thead>
                                    <tr>
                                        <th> # PID </th>
                                        <th> Product Name </th>
                                        <th> Price </th>
                                        <th> Quantity </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.filter(post => {
                                            if(post.productname.toLowerCase().includes(keyword.toLowerCase()) )
                                            {
                                                return post;
                                            }
                                        })
                                        .slice(offset, offset + PER_PAGE).map((data, index) =>{
                                            return(
                                                <tr key={index}>
                                                    <td> {data.pid} </td>
                                                    <td> {data.productname} </td>
                                                    <td> {data.price} </td>
                                                    <td> {data.qty} </td>
                                                </tr>
                                            )  
                                        })
                                    }

                                    <tr className="bg-light">                               
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
                </div>
            </div>
        </>
    )
}

export default ManageProduct;