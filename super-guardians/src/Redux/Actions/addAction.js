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

function deleteCoffee(value) {
  return {
    type: "DELETE",
    payload: value,
  };
}

function updateTime(value) {
  return {
    type: "UPDATE_TIME",
    payload: value,
  };
}

function setIsLoadingPageShowedToTrue(value) {
  return {
    type: "SET_IS_LOADING_PAGE_SHOWED_TO_TRUE",
    payload: value,
  };
}

export {
  add,
  clearCart,
  updateTime,
  setIsLoadingPageShowedToTrue,
  deleteCoffee,
};
