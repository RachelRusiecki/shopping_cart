import { z } from "zod";

export const productSchema = z.object({
  _id: z.string().min(1),
  title: z.string().min(1),
  price: z.number().min(0),
  quantity: z.number().min(0),
  createdAt: z.string(),
  updatedAt: z.string(),
  _v: z.number()
});

export type Product = z.infer<typeof productSchema>;

export const cartSchema = productSchema.extend({ productId: z.string() });

export type Cart = z.infer<typeof cartSchema>;

export const newProductSchema = z.object({
  title: z.string().min(1),
  quantity: z.string().min(1),
  price: z.string().min(1)
});

export type NewProduct = z.infer<typeof newProductSchema>;

export const updatedProductSchema = z.object({
  title: z.string().min(1),
  quantity: z.number().min(0),
  price: z.number().min(0)
});

export type UpdatedProduct = z.infer<typeof updatedProductSchema>;

export const cartResSchema = z.object({
  product: productSchema,
  item: cartSchema
});

export type CartRes = z.infer<typeof cartResSchema>;

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
