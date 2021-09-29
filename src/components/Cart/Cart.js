import React, { Component } from "react";
import './Cart.css';
import { connect } from "react-redux";
import { addToCart, removeFromCart} from "../../redux/actions/cartActions";

class Cart extends Component {
  render() {

    let cartCount
    let subTotal

    const { cartItems } = this.props;

    cartCount = cartItems.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.count;
    }, 0);

    subTotal = cartItems.reduce(function (sum, currentValue) {
      sum += currentValue.count * currentValue.details.price;
      return sum;
    }, 0);

    return (
      <div className="cartscreen">
        <div className="cartscreenLeft">
          {cartItems.length > 0 && (
            <div className="item">
              {cartItems.map((item) => (
                <div className="cartitem" key={item.id}>
                  <div className="cartitemImage">
                    <img src={item.details.image}/>
                  </div>
                  <div className="cartitemName">{item.name}</div>
                  <p>{item.details.size} | {item.details.type}</p>
                  <p>{item.count}</p>
                  
                    <i className="fas fa-times"
                      onClick={(e) =>
                        this.props.removeFromCart(this.props.cartItems, item)
                      }>
                    </i>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="cartscreenRight">
          <div className="cartscreenInfo">
          {cartItems.length === 0 ? (
              <div>Your Cart is Empty</div>
          ) : (
              <div>You have {cartCount} items</div>
          )}
            {cartItems.length !== 0 && (
                <div>Sub Total $ {subTotal.toFixed(2)} </div>
            )}
          
          {cartItems.length !== 0 && (
            <button className="checkOutBtn" onClick={() => alert("Thank you for purchasing")}>Checkout</button>
          )}
          </div>
      </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products.filteredItems,
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { addToCart, removeFromCart})(Cart);
