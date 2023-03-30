const initialState = {
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        cart: state.cart.concat(action.payload),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: (state.cart = []),
      };
    default:
      return state;
  }
};

export default reducer;
