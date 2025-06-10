import { useState} from "react";
import EditForm from "./EditForm";
import { addToCart, deleteProduct } from "../services";
import type { ProductActions, CartActions } from "../types";

interface ProductProps {
  productDispatch: React.ActionDispatch<[action: ProductActions]>,
  cartDispatch: React.ActionDispatch<[action: CartActions]>,
  _id: string,
  title: string,
  price: number,
  quantity: number
}

const EditableProduct = ({
  cartDispatch,
  productDispatch,
  _id,
  title,
  price,
  quantity
}: ProductProps) => {
  const [displayEditForm, setDisplayEditForm] = useState(false);

  const toggleEditForm = () => setDisplayEditForm(!displayEditForm);

  const handleAddToCart = async () => {
    const response = await addToCart(_id);
    cartDispatch({ type: "ADD_TO_CART", response: response });
    productDispatch({ type: "ADD_TO_CART", response: response });
  };

  const handleDelete = async () => {
    await deleteProduct(_id);
    productDispatch({ type: "DELETE", id: _id });
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
          productDispatch={productDispatch}
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
