import React, { Component } from "react";
import { connect } from "react-redux";
import '../HomePage/HomePage';
import { filterProducts, sortProducts } from "../../redux/actions/productActions";

//array for filter by sizes
const availableSizes = [
  { name: "ALL", value: "" },
  { name: "XS", value: "xsmall" },
  { name: "S", value: "small" },
  { name: "M", value: "m" },
  { name: "ML", value: "ml" },
  { name: "L", value: "large" },
  { name: "XXL", value: "xxl" }
]

class Filters extends Component {
  render() {
    return (
      <div>
          <h3>{`${this.props.filteredProducts.length} Product(s) found.`}</h3>
          <br/>
          <h4>Sizes:</h4>
              <div>
                {availableSizes.map((data) => (
                  <span className="dot" key={data.value} id={data.value} onClick={(event) => {
                    this.props.filterProducts(
                      this.props.products,
                      event.target.id
                    );
                  }}>{data.name}</span>
                ))}
              </div>
              <br/>
              <h4>Order By:</h4>
              <div>
                <select
                  value={this.props.sort}
                  onChange={(event) => {
                    this.props.sortProducts(
                      this.props.products,
                      event.target.value
                    );
                  }}
                >
                  <option value="">All</option>
                  <option value="t-shirt">T-Shirt</option>
                  <option value="dress shirts">Dress Shirts</option>
                </select>
              </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products.items,
  filteredProducts: state.products.filteredItems,
  size: state.products.size,
  sort: state.products.sort,
});
export default connect(mapStateToProps, { filterProducts, sortProducts })(
  Filters
);
