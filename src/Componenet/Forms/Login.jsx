function Login(){
    return(
        <div>
            <form className="d-flex justify-content-center">
                <fieldset className="border m-5 ">
                    <figcaption className="fs-3 mt-3 text-center text-primary fw-bold">Login Form</figcaption><br></br>
                    <div class="form-outline m-4 c">
                        <label className="form-label" for="form2Example1">Email address</label>
                        <input type="email" id="form2Example1" placeholder="Email address" className="form-control" />
                    </div>

                    <div class="form-outline m-4">
                        <label className="form-label" for="form2Example2">Password</label>
                        <input type="password" id="form2Example2" placeholder="Password" className="form-control" />
                    </div>

                    <div className="row m-4">
                        <div className="col d-flex justify-content-center">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                            <label className="form-check-label" for="form2Example31">Remember me</label>
                        </div>
                        </div>
                        <div className="col-6">
                            <a href="#!">Forgot password?</a>
                        </div>
                    </div>

                    <div className="btn d-flex justify-content-center">
                        <button type="button" className="btn btn-outline-primary btn-block mb-3 fs-5"><span className="">Sign in</span></button>
                    </div>

                    <div className="text-center">
                        <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f"></i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google"></i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter"></i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github"></i>
                        </button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}
export default Login