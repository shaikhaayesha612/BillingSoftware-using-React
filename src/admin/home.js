
const Myhome = () =>{
    return(
        <section>
            <h2 className="text-center mt-5 mb-2"> Dashboard </h2>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="bg-info text-center text-white rounded p-2">
                            <h4 className="mt-3"> 2018-2019 </h4>
                            <p> Total Bill : 92 </p>
                        </div> 
                    </div>
                    <div className="col-lg-3">
                        <div className="bg-info text-center text-white rounded p-2">
                            <h4 className="mt-3"> 2019-2020 </h4>
                            <p> Total Bill : 27 </p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="bg-info text-center text-white rounded p-2">
                            <h4 className="mt-3"> 2020-2021 </h4>
                            <p> Total Bill : 9 </p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="bg-info text-center text-white rounded p-2">
                            <h4 className="mt-3"> 2021-2022 </h4>
                            <p> Total Bill : 35 </p>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-3">
                        <div className="bg-info text-center text-white rounded p-2">
                            <h4 className="mt-3"> 2022-2023 </h4>
                            <p> Total Bill : 83 </p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="bg-info text-center text-white rounded p-2">
                            <h4 className="mt-3"> 2023-2024 </h4>
                            <p> Total Bill : 0 </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Myhome;