export interface AddProps {
  handleClick: (event: React.SyntheticEvent) => void
};

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

export interface Cart extends Product {
  productId: string,
  createdAt: string,
  updatedAt: string,
  _v: number
};

export interface CartRes {
  product: Product,
  item: Cart
};
