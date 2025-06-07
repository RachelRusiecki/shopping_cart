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

export interface UpdatedProduct {
  title: string,
  quantity: number,
  price: number
};

export interface Cart extends Product { productId: string };
