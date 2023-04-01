const initialState = {
  cart: [],
  orderNr: "",
  isLoadingPageShowed: false,
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
    case "UPDATE_TIME":
      return {
        ...state,
        orderNr: action.payload,
      };

    case "SET_IS_LOADING_PAGE_SHOWED_TO_TRUE":
      return {
        ...state,
        isLoadingPageShowed: (state.isLoadingPageShowed = true),
      };
    default:
      return state;
  }
};

export default reducer;
