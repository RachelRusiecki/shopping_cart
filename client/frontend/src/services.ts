import axios from "axios";
import type { Product, Cart, NewProduct, UpdatedProduct } from "./types";

const baseUrl = "http://localhost:5001/api";

export const getAllCartProducts = async () => {
  const res = await axios.get<Cart[]>(`${baseUrl}/cart`);
  return res.data;
};

export const getAllProducts = async () => {
  const res = await axios.get<Product[]>(`${baseUrl}/products`);
  return res.data;
};

export const addNew = async(newProduct: NewProduct) => {
  const res = await axios.post<Product>(`${baseUrl}/products`, newProduct);
  return res.data;
};

export const updateProduct = async(id: string, product: UpdatedProduct) => {
  const res = await axios.put<Product>(`${baseUrl}/products/${id}`, product);
  return res.data;
};
