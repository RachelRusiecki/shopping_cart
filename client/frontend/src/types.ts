export interface Product {
  _id: string,
  title: string,
  price: number,
  quantity: number,
  createdAt: string,
  updatedAt: string,
  _v: number
};

export interface NewProduct {
  title: string,
  quantity: string,
  price: string
};

export type UpdatedProduct = {
  title: string,
  quantity: number,
  price: number
};

export interface Cart extends Product { productId: string };

export interface CartRes { product: Product, item: Cart };

interface SetInitialProductsActions {
  type: "SET_INITIAL_PRODUCTS",
  products: Product[],
};

interface AddNewProductActions { type: "ADD_NEW", response: Product };

interface AddToCartProductActions { type: "ADD_TO_CART", response: CartRes };

interface DeleteProductActions { type: "DELETE", id: string };

interface UpdateProductActions {
  type: "UPDATE",
  response: Product,
  id: string
};

export type ProductActions = SetInitialProductsActions |
                             AddNewProductActions |
                             AddToCartProductActions |
                             DeleteProductActions |
                             UpdateProductActions;

interface SetInitialCartActions { type: "SET_INITIAL_CART", cart: Cart[] };

interface CheckoutActions { type: "CHECKOUT" };

interface AddToCartActions { type: "ADD_TO_CART", response: CartRes };

export type CartActions = SetInitialCartActions |
                          CheckoutActions |
                          AddToCartActions;
