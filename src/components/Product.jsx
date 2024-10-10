import "./Product.css";
import { Link } from "react-router-dom";
export default function Proudct(props) {
  return (
    <>
      <div className="col-md-6 col-sm-12 col-lg-4">
        <div className="card mb-3">
          <div className="img-container">
            <img
              src={props.list.image}
              className="card-img-top"
              alt={props.list.title}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title ">{props.list.title}</h5>
            <p className="card-text">{props.list.description}</p>
            <Link
              to={"/products/details/" + props.list.id}
              className="btn btn-primary"
            >
              details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
