const initialState = {
  cart: [],
  product: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        cart: state.cart.concat([action.payload]),
      };

    default:
      return state;
  }
};

export default reducer;
