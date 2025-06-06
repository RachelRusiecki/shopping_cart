import { useState } from "react";
import type { FormFields } from "../types";

interface EditFormProps {
  isVisible: boolean,
  title: string,
  price: number,
  quantity: number,
  toggleEditForm: () => void
};

const EditForm = ({
  isVisible,
  title,
  price,
  quantity,
  toggleEditForm
}: EditFormProps) => {

  const [formData, setFormData] = useState({ title, price, quantity });

  const handleChange = (event: FormFields) => {
    const { name, value } = event.target;
    setFormData({...formData, [name]: value });
  };

  if (isVisible) {
    return (
      <div className="edit-form">
        <h3>Edit Product</h3>
        <form>
          <div className="input-group">
            <label htmlFor="product-name">{title}</label>
            <input
              onChange={handleChange}
              name="title"
              type="text"
              id="product-name"
              value={formData.title}
              aria-label="Product Name"
            />
          </div>

          <div className="input-group">
            <label htmlFor="product-price">Price</label>
            <input
              onChange={handleChange}
              name="price"
              type="number"
              id="product-price"
              value={formData.price}
              aria-label="Product Price"
            />
          </div>

          <div className="input-group">
            <label htmlFor="product-quantity">Quantity</label>
            <input
              onChange={handleChange}
              name="quantity"
              type="number"
              id="product-quantity"
              value={formData.quantity}
              aria-label="Product Quantity"
            />
          </div>

          <div className="actions form-actions">
            <button type="submit">Update</button>
            <button type="button" onClick={toggleEditForm}>Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}

export default EditForm;
