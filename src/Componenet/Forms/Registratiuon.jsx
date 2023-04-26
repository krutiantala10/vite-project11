function Registraion(){
    return(
        <div className="d-flex justify-content-center row">
            <div className="col-6">  
             <fieldset className="border m-5 col">
                    <figcaption className="fs-3 mt-4 text-center text-primary fw-bold">Registraion Here</figcaption><br></br>
                    <div class="form-outline m-4 col-10">
                        <label className="form-label" for="form2Example1">First Name</label>
                        <input type="text" id="form2Example1" placeholder="First Name" className="form-control" />
                    </div>

                    <div class="form-outline m-4 col-10">
                        <label className="form-label" for="form2Example1">Last Name</label>
                        <input type="text" id="form2Example1" placeholder="Last Name" className="form-control" />
                    </div>

                    <div class="form-outline m-4 col-10">
                        <label className="form-label" for="form2Example1">Email address</label>
                        <input type="email" id="form2Example1" placeholder="Email address" className="form-control" />
                    </div>

                    <div class="form-outline m-4 col-10">
                        <label className="form-label" for="form2Example2">Password</label>
                        <input type="password" id="form2Example2" placeholder="Password" className="form-control" />
                    </div>

                    <div className="row m-4 ">
                        <div className="col-10">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                                <label className="form-check-label" for="form2Example31">i accept terms and conditions</label>
                            </div>
                        </div>
                    </div>

                    <div className="btn d-flex justify-content-center">
                        <button type="button" className="btn btn-outline-primary btn-block mb-3 fs-5"><span className="ms-3 me-3">Register</span></button>
                    </div>
                </fieldset>
            </div>
        </div>
    )
}
export default Registraion