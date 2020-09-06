export const initialState = {
  basket: [
    {
      id: "123",
      title:
        "Turtle Beach - Ear Force Recon 50P Stereo Gaming Headset - PS4 and Xbox One (compatible w/ Xbox One controller w/ ",
      image: "https://m.media-amazon.com/images/I/81dh8R950eL._AC_UY218_.jpg",
      price: 50.49,
      rating: 3,
    },
    {
      id: "5123",
      title: "Minecraft - Nintendo Switch",
      image: "https://m.media-amazon.com/images/I/71dIHv1zh7L._AC_UY218_.jpg",
      price: 30.49,
      rating: 3,
    },
  ],
  user : null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
      break;

    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("Çant remove product (id: ${action.id}) ");
      }

      return {
        ...state,
        basket: newBasket,
      };
      break;

    default:
      return state;
  }
}

export default reducer;
