import type { Cart, Product, ProductActions, CartActions } from "./types";

export const productsReducer = (state: Product[], action: ProductActions) => {
  switch (action.type) {
    case "SET_INITIAL_PRODUCTS": {
      return action.products;
    }
    case "ADD_NEW": {
      return state.concat(action.response);
    }
    case "ADD_TO_CART": {
      return state.map(product => {
        if (product._id === action.response.item.productId) {
          return { ...product, quantity: product.quantity - 1 };
        } else {
          return product;
        }
      });
    }
    case "DELETE": {
      return state.filter(product => product._id !== action.id);
    }
    case "UPDATE": {
      return state.map(product => {
        return product._id === action.id ? action.response : product;
      });
    }
    default: {
      throw Error("Unknown action: " + (action as any).type);
    }
  };
};

export const cartReducer = (state: Cart[], action: CartActions) => {
  switch (action.type) {
    case "SET_INITIAL_CART": {
      return action.cart;
    }
    case "CHECKOUT": {
      return [];
    }
    case "ADD_TO_CART": {
      const addedItem = state.find(({ productId }) => {
        return productId === action.response.item.productId;
      });

      if (addedItem) {
        return state.map(cartItem => {
          if (cartItem.productId ===  action.response.product._id) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          } else {
            return cartItem;
          }
        });
      } else {
        return state.concat(action.response.item);
      }
    }
    default: {
      throw Error("Unknown action: " + (action as any).type);
    }
  };
};
