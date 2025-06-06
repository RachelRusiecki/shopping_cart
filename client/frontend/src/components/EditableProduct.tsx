import { useState } from "react";
import EditForm from "./EditForm";
import type { Product } from "../types";

type ProductProps = Omit<Product, '_id'>;

const EditableProduct = ({ title, price, quantity }: ProductProps) => {
  const [displayEditForm, setDisplayEditForm] = useState(false)

  const toggleEditForm = () => setDisplayEditForm(!displayEditForm);

  return (
    <li className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">{price}</p>
        <p className="quantity">
          {quantity} left in stock
        </p>
        <div className="actions product-actions">
          <button className="add-to-cart">Add to Cart</button>
          <button className="edit" onClick={toggleEditForm}>Edit</button>
        </div>
        <button className="delete-button"><span>X</span></button>
        <EditForm
          isVisible={displayEditForm}
          title={title}
          price={price}
          quantity={quantity}
          toggleEditForm={toggleEditForm} />
      </div>
    </li>
  )
}

export default EditableProduct;
