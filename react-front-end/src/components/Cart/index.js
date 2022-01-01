import { Card, Row, Col, Container } from "react-bootstrap";
import image from "../../assets/0120424999_6_1_1.webp";
import CartItem from "./CartItem";
import { useHistory } from "react-router-dom";
const { cart } = useData(); 
import { useData } from "./../contexts/commonData";

const Cart = () => {
  const cart = [
    {
      id: "2",
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      stock: 100,
      name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15",
      price: 109.95,
      quantity: 1,
    },
    {
      id: "3",
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      stock: 100,
      name: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      quantity: 1,
    },
  ];

  const history = useHistory();
  const cart = window.localStorage.getItem("cart");
  
  return (
    <div className="d-flex flex-row justify-content-between col-12 flex-grow-1 p-3 py-5">
      <div className="d-flex flex-column col-7">
        <div className=" flex-grow-1-scroll  pe-4 my-4  col-12">
          <CartItem
            img={image}
            title="Card title"
            Description="Some quick example text to build on the card title and make up the bulk of
      the card's content."
            price={65}
          />

          <CartItem
            img={image}
            title="Card title"
            Description="Some quick example text to build on the card title and make up the bulk of
      the card's content."
            price={23}
          />

          <CartItem
            img={image}
            title="Card title"
            Description="Some quick example text to build on the card title and make up the bulk of
      the card's content."
            price={78}
          />

          <CartItem
            img={image}
            title="Card title"
            Description="Some quick example text to build on the card title and make up the bulk of
      the card's content."
            price={30}
          />

          <CartItem
            img={image}
            title="Card title"
            Description="Some quick example text to build on the card title and make up the bulk of
      the card's content."
            price={80}
          />

          <CartItem
            img={image}
            title="Card title"
            Description="Some quick example text to build on the card title and make up the bulk of
      the card's content."
            price={40}
          />
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
                <td>Item Total</td>
              </tr>
              <tr>
                <td>Store pickup</td>
              </tr>
              <tr>
                <p>Estimated Sales Tax</p>
              </tr>
            </table>
            <hr />
            <p>Total</p>
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
