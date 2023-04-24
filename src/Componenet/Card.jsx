function Card(){
    return (
        <div className="justify-content-center d-flex">
            <div className="card" style={{width: '18rem'}}>
                <img src="download.jpg" className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-warning">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}
export default Card