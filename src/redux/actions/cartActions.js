import { ADD_TO_CART, REMOVE_FROM_CART} from "../constants/cartConstants";

//add items to cart
export const addToCart = (items, product) => (dispatch) => {
  const cartItems = items.slice();
  let productInCart = false;

  cartItems.forEach((cartProduct) => {
    if (cartProduct.id === product.id) {
      cartProduct.count += 1;
      productInCart = true;
    }
  });

  if (!productInCart) {
    cartItems.push({ ...product, count: 1 });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: ADD_TO_CART, payload: { cartItems } });
};

//remove items from cart
export const removeFromCart = (items, product) => (dispatch) => {
  const cartItems = items.slice().filter((a) => a.id !== product.id);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
};
