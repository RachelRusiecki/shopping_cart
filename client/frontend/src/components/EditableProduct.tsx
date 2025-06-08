import { useState } from "react";
import EditForm from "./EditForm";
import { addToCart, deleteProduct } from "../services";
import type { Product, Cart, CartRes } from "../types";

interface ProductProps {
  products: Product[],
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>,
  cart: Cart[],
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>,
  _id: string,
  title: string,
  price: number,
  quantity: number
}

const EditableProduct = ({
  products,
  cart,
  setCart,
  setProducts,
  _id,
  title,
  price,
  quantity
}: ProductProps) => {
  const [displayEditForm, setDisplayEditForm] = useState(false);

  const toggleEditForm = () => setDisplayEditForm(!displayEditForm);

  const findCartItems = (response: CartRes) => {
    if (cart.find(({ productId }) => productId === response.item.productId)) {
      return cart.map(cartItem => {
        if (cartItem.productId ===  response.product._id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        } else {
          return cartItem;
        }
      });
    } else {
      return cart.concat(response.item);
    }
  };

  const handleAddToCart = async () => {
    const response = await addToCart(_id);
    setCart(findCartItems(response));
    setProducts(products.map(product => {
      if (product._id === response.item.productId) {
        return { ...product, quantity: product.quantity - 1 };
      } else {
        return product;
      }
    }));
  };

  const handleDelete = async () => {
    await deleteProduct(_id);
    setProducts(products.filter(product => product._id !== _id));
  };

  return (
    <li className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price.toFixed(2)}</p>
        <p className="quantity">
          {quantity} left in stock
        </p>
        <div className="actions product-actions">
          <button
          className="add-to-cart"
          onClick={handleAddToCart}
          disabled={displayEditForm || quantity < 1}>
            Add to Cart
          </button>
          <button
            className="edit"
            onClick={toggleEditForm}
            disabled={displayEditForm}>
            Edit
          </button>
        </div>
        <button className="delete-button" onClick={handleDelete}>
          <span>X</span>
        </button>
        {displayEditForm ? <EditForm
          products={products}
          setProducts={setProducts}
          _id={_id}
          title={title}
          price={price}
          quantity={quantity}
          toggleEditForm={toggleEditForm} /> : null}
      </div>
    </li>
  )
}

export default EditableProduct;
