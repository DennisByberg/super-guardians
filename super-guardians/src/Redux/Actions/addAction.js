function add(value) {
  return {
    type: "ADD",
    payload: value,
  };
}

function clearCart(value) {
  return {
    type: "CLEAR_CART",
    payload: value,
  };
}

export { add, clearCart };
