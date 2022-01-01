import { Container} from "react-bootstrap";
import {Form} from 'react-bootstrap';

const Checkout = () => {
  return <div className="checkout">
    <div className="col-6 left" >
      <h4>Getting your order</h4><hr/>
      <h6>Shipping information</h6>
      <div className="col-5">
      <Form >
      <Form.Group className="form-group">
         <b>First Name</b>
          <Form.Control type="text"/>
        </Form.Group>
        <Form.Group className="form-group">
          <b>Last Name</b>
          <Form.Control type="email"/>
        </Form.Group>
        <Form.Group className="form-group">
          <b>Address</b>
          <Form.Control type="text"/>
        </Form.Group>
        <Form.Group className="form-group">
         <b>City</b>
        <Form.Control type="text"/>
       </Form.Group>
       <Form.Group className="form-group">
        <b>Zip code</b>
       <Form.Control type="text"/>
       </Form.Group>
       </Form>
      <Form.Check type='checkbox' className="form-group"/>
      <small>Save this as my billing Address</small></div>
    <hr/>
    
    <h4>Contact Information</h4>
    <div className="col-6">
    <Form>
   <Form.Group className="form-group">
   <b>Email Address:</b>
    <Form.Control type="text"/>
    </Form.Group>
    <Form.Group className="form-group">
    <b>Phone Number:</b>
    <Form.Control type="email"/>
    </Form.Group>
   </Form>
   <Form.Check type='checkbox' className="form-group"/>
   <small>Text me updates about my Best Buy order.</small>
    </div>
</div>

<div
  className="card mt-4 my-4 right"
  style={{ width: "25rem", height: "17rem" }}
>
  <div className="card-block bg-white py-2 px-2 ">
    <Container>
      <h5 className="card-title"> Order Summary</h5>
     {/* <p className="card-text">Item total Store backup</p>
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
    </Container>
  </div>
</div>

  </div>;
};

export default Checkout;
