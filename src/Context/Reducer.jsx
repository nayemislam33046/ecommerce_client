export const reducer = (state, action) => {
  switch (action.type) {
    case "ADDTOCART":
      return {
        ...state,
        product: [...state.product, action.payload],
      };
    case "REMOVETOCART":
      return {
        ...state,
        product: [...state.product].filter(
          (cart) => cart.id !== action.payload
        ),
      };
    case "INCREMENT":
      return {
        ...state,
        product: state.product.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    case "DECREMENT":
      return {
        ...state,
        product: state.product.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default:
      return state;
  }
};