
const Footer = () =>{
    return(
        <footer className="bg-info p-5 text-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h4> About Us </h4>
                        <img src="https://d1nxzqpcg2bym0.cloudfront.net/google_play/restaurant.billing.system/5b12f8cc-1b43-11e5-8915-49b6b1b8f2a7/128x128"
                                  height="100" width="40%"/>
                        <h5 className="mt-2"> Billing Software Solutions </h5>
                        <h6> Billing & Invoicing </h6>
                    </div>
                    <div className="col-lg-4">
                        <h4> Office Address </h4>
                        <p> Billing Software Solutions </p>
                        <p> #123, Billing Software Solutions, </p>
                        <p> Mantri Square Park, </p>
                        <p> Bengaluru, Karnataka. </p>
                        <p> Contact: 9999999999</p>
                    </div>
                    <div className="col-lg-4">
                        <h4> In Social Media </h4>
                        <p> <i class="fab fa-facebook"></i> Follow in Facebook </p>
                        <p> <i class="fab fa-linkedin"></i> Follow in Linkedin </p>
                        <p> <i class="fab fa-twitter"></i> Follow in Twitter </p>
                        <p> <i class="fab fa-instagram"></i> Follow in Instagram </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;