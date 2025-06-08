export interface AddProps {
  handleClick: (event: React.SyntheticEvent) => void
};

export interface Product {
  _id: string,
  title: string,
  quantity: number,
  price: number
};

export interface NewProduct {
  title: string,
  quantity: string,
  price: string
};

export type UpdatedProduct = Omit<Product, "_id">;

export interface Cart extends Product {
  productId: string,
  createdAt: string,
  updatedAt: string,
  _v: number
};

export interface CartRes {
  product: {
    _id: string,
    title: string,
    price: number,
    quantity: number,
    createdAt: string,
    updatedAt: string,
    _v: number
  },
  item: Cart
};
