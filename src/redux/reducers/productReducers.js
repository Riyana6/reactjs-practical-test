import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_SIZE,
  ORDER_PRODUCTS_BY_TYPE,
} from "../constants/productConstants";


//manage products with fetch and filtering
const initState = { items: [], filteredItems: [], size: "", sort: "" };
export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, items: action.payload, filteredItems: action.payload };
    case FILTER_PRODUCTS_BY_SIZE:
      return {
        ...state,
        filteredItems: action.payload.items,
        size: action.payload.size,
      };
    case ORDER_PRODUCTS_BY_TYPE:
      return {
        ...state,
        filteredItems: action.payload.items,
        sort: action.payload.sort,
      };

    default:
      return state;
  }
}
