import { propTypes } from "react-bootstrap/esm/Image";

const CartItem = ({ title, img, Description, price, quantity }) => {
  return (
    <div className="card mb-4 col-12">
      <div className="row m-0 no-gutters">
        <div className="col d-flex py-2 justify-content-center">
          <img
            src={img}
            style={{
              width: "150px",
              objectFit: "scale-down",
            }}
          />
        </div>
        <div className="col-6" style={{ padding: "13px" }}>
          <div className="card-block px-2">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{Description}</p>
          </div>
        </div>
        <b
          className="col"
          style={{ color: "rgb(25, 224, 75)", padding: "13px" }}
        >
          {price}
        </b>
      </div>
    </div>
  );
};

export default CartItem;
