import { Card,Row,Col, Container } from "react-bootstrap";
import image  from "../../assets/0120424999_6_1_1.webp";
import CartItem from "./CartItem";
import { useHistory } from "react-router-dom";

const Cart = () => {
 const history = useHistory();
  return <div className="d-flex  flex-grow-1">
  <div className="Toleft d-flex flex-column flex-grow-1-scroll ">
   <CartItem  img={image} title="Card title" Description="Some quick example text to build on the card title and make up the bulk of
      the card's content." price='price'/>

<CartItem  img={image} title="Card title" Description="Some quick example text to build on the card title and make up the bulk of
      the card's content." price='price'/>

<CartItem  img={image} title="Card title" Description="Some quick example text to build on the card title and make up the bulk of
      the card's content." price='price'/>

<CartItem  img={image} title="Card title" Description="Some quick example text to build on the card title and make up the bulk of
      the card's content." price='price'/>

<CartItem  img={image} title="Card title" Description="Some quick example text to build on the card title and make up the bulk of
      the card's content." price='price'/>

<CartItem  img={image} title="Card title" Description="Some quick example text to build on the card title and make up the bulk of
      the card's content." price='price'/>
  </div>

    <div className="card mt-4 my-4 Toright" style={{width:'25rem',height:'17rem'}}>
           <div className="card-block px-2 ">
                <Container>
                  {/* <h5 className="card-title" > Order Summary</h5>
                    <p className="card-text">Item total
                    Store backup
                    </p>*/}
                  <h5 className="card-title">Order Summary</h5><hr/>
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
                  </table><hr/>
                  <p>Total</p>
                  <center><button type="button" class="btn" onClick={() => {history.push("/checkout");}}>Check out</button></center>
                </Container>
           </div>
    </div>
   


  </div>;
};

export default Cart;
