import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_SIZE,
  ORDER_PRODUCTS_BY_TYPE,
} from "../constants/productConstants";

//get data from the url
export const fetchProducts = () => (dispatch) => {
  fetch("https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments")
    .then((res) => res.json())
    .catch((err) =>
      console.log(`Data is not fetching for the store because of ${err}`)
    )
    .then((data) => {
      dispatch({ type: FETCH_PRODUCTS, payload: data });
    });
};

//filter by specific sizes
export const filterProducts = (products, size) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCTS_BY_SIZE,
    payload: {
      size: size,
      items:
        size === ""
          ? products
          : products.filter(
            (x) => x.details.size === size
          ),
    },
  });
};

//filter by type
export const sortProducts = (products, type) => (dispatch) => {
  dispatch({
    type: ORDER_PRODUCTS_BY_TYPE,
    payload: {
      type: type,
      items:
        type === ""
          ? products
          : products.filter(
            (x) => x.details.type === type
          ),
    },
  });
};