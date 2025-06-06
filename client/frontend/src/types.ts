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

export interface Cart extends Product { productId: string };

export interface FormFields { target: { name: string, value: string } };
