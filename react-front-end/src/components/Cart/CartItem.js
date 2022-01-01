import { propTypes } from "react-bootstrap/esm/Image";

const CartItem = ({ title, img, Description, price }) => {
  return (
    <div className="card mb-4 col-12">
      <div className="row m-0 no-gutters">
        <div className="col d-flex py-2 justify-content-center">
          <img
            src={"http://localhost:3900/images/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"}
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

CartItem.protoTypes = {
  price: propTypes.float.isRequired
}

export default CartItem;
