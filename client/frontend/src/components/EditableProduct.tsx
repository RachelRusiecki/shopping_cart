import { useState } from "react";
import EditForm from "./EditForm";
import type { Product } from "../types";

interface ProductProps {
  products: Product[],
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>,
  _id: string,
  title: string,
  price: number,
  quantity: number
}

const EditableProduct = ({
  products,
  setProducts,
  _id,
  title,
  price,
  quantity
}: ProductProps) => {
  const [displayEditForm, setDisplayEditForm] = useState(false)

  const toggleEditForm = () => {
    setDisplayEditForm(!displayEditForm);
  }

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
          products={products}
          setProducts={setProducts}
          isVisible={displayEditForm}
          _id={_id}
          title={title}
          price={price}
          quantity={quantity}
          toggleEditForm={toggleEditForm} />
      </div>
    </li>
  )
}

export default EditableProduct;
