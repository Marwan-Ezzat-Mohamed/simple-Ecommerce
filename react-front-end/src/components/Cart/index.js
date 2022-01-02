import { Card, Row, Col, Container } from "react-bootstrap";
import image from "../../assets/0120424999_6_1_1.webp";
import CartItem from "./CartItem";
import { useHistory } from "react-router-dom";
import { useData } from "../../contexts/commonData";

const Cart = () => {
  const history = useHistory();
  const { cart } = useData();
  const Taxs = 6.35;

  let total = cart.reduce((Prev, cur) => {
    return Prev + cur.quantity * cur.price;
  }, 0);

  return (
    <div className="d-flex flex-row justify-content-between col-12 flex-grow-1 p-3 py-5">
      <div className="d-flex flex-column col-7">
        <div className=" flex-grow-1-scroll  pe-4 my-4  col-12">
          {cart.map((product) => (
            <CartItem
              key={product.id}
              title={product.name}
              Description={product.description}
              price={product.price}
              img={product.image}
              quantity={product.quantity}
            ></CartItem>
          ))}
        </div>
      </div>

      <div
        className="card mt-4 my-4 "
        style={{ width: "25rem", height: "17rem" }}
      >
        <div className="card-block bg-white py-2 px-2 ">
          <Container>
            <h5 className="card-title"> Order Summary</h5>
            {/*<p className="card-text">Item total Store backup</p>
            <h5 className="card-title">Order Summary</h5>*/}
            <hr />
            <table className="card-body">
              <tr>
                <td>Item Total</td>${parseFloat(total).toFixed(2)}
              </tr>
              <tr>
                <td>Store pickup</td>FREE
              </tr>
              <tr>
                <p>Estimated Sales Tax ${Taxs}</p>
              </tr>
            </table>
            <hr />
            <p>Total ${parseFloat(total + Taxs).toFixed(2)}</p>
            <center>
              <button
                type="button"
                class="btn btn-success"
                onClick={() => {
                  history.push("/checkout");
                }}
              >
                Check out
              </button>
            </center>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Cart;
