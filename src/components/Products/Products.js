import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { fetchProducts } from "../../redux/actions/productActions";
import './Products.css'
class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const productItems = this.props.products.map((product) => (
      <div className="product" key={product.id}>
        <img src={product.details.image} alt={product.name} />
        <div className="productInfo">
          <div className="infoName">{product.name} | {product.details.size}</div>
          <div className="infoPrice">$ {product.details.price}</div>
          <p>{product.details.tag}</p>
          <button type="button" onClick={(e) => this.props.addToCart(this.props.cartItems, product)}>Add To Cart</button>
        </div>
      </div>
    ));

    return <div className="homeProducts">{productItems}</div>;
  }
}
const mapStateToProps = (state) => ({
  products: state.products.filteredItems,
  cartItems: state.cart.items,
});

export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);
