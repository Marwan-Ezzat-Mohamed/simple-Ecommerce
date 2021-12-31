import { Card } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";


const CartItem = ({title,img,Description,price}) => {
  return <div className="CartItem">
    <div className="card mt-4 my-4" style={{width:'45rem',height:'10rem'}}>
        <div className="row no-gutters">
            <div className="col-4">
                <img src={img} style={{width:'15rem' ,height:'10rem',padding:'13px'}}/>
            </div>
            <div className="col-6" style={{padding:'13px'}}>
                <div className="card-block px-2">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{Description}</p>
                </div>
             </div>   
            <b className="col"  style={{color:'rgb(25, 224, 75)',padding:'13px'}}>{price}</b>
        </div>
   </div>

  </div>;

};



export default CartItem;


git config --global user.email "you@example.com"
git config --global user.name "Your Name"