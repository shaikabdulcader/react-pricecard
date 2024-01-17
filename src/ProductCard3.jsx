function ProductCard3(props){
    return(
        <div>
            <div className="card" style={{width: "18rem"}}>
            <div className="header">
            <div className="card-head opacity-50"><h6>{props.plan}</h6></div>
            <h1 className="card-title">{props.month}</h1>
            </div>
            <div className="card-body">
            <p className="card-text"><i class="fa fa-check" aria-hidden="true"></i> Single User</p>
            <p className="card-text"><i class="fa fa-check" aria-hidden="true"></i> 50GB Storage</p>
            <p className="card-text"><i class="fa fa-check" aria-hidden="true"></i> Unlimited Public Projects</p>
            <p className="card-text"><i class="fa fa-check" aria-hidden="true"></i> Community Access</p>
            <p className="card-text"><i class="fa fa-check"></i> Unlimited Private Projects</p>
            <p className="card-text"><i class="fa fa-check"></i> Dedicated Phone Support</p>
            <p className="card-text"><i class="fa fa-check"></i> Free Subdomain</p>
            <p className="card-text"><i class="fa fa-check"></i> Monthly Status Reports</p>
            <button className="button">BUTTON</button>
            </div>
            </div>
        </div>
    );
}

export default ProductCard3;
