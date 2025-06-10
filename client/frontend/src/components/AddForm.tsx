import { addNew } from "../services";
import { useState } from "react";
import type { ProductActions } from "../types";

interface AddFormProps {
  handleClick: (event: React.SyntheticEvent) => void,
  productDispatch: React.ActionDispatch<[action: ProductActions]>
}

const AddForm = ({ handleClick, productDispatch }: AddFormProps) => {
  const [formData, setFormData] = useState({
    "product-name": "",
    "product-price": "",
    "product-quantity": "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({...formData, [name]: value })
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const newProduct = {
      title: formData["product-name"],
      price: formData["product-price"],
      quantity: formData["product-quantity"],
    };

    const response = await addNew(newProduct);
    handleClick(event);
    productDispatch({ type: "ADD_NEW", response: response });
  };

  return (
    <div className="add-form">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="product-name">Product Name:</label>
          <input
            onChange={handleChange}
            type="text"
            id="product-name"
            name="product-name"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-price">Price:</label>
          <input
            onChange={handleChange}
            type="number"
            id="product-price"
            name="product-price"
            min="0"
            step="0.01"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-quantity">Quantity:</label>
          <input
            onChange={handleChange}
            type="number"
            id="product-quantity"
            name="product-quantity"
            min="0"
            required
          />
        </div>
        <div className="actions form-actions">
          <button type="submit">Add</button>
          <button onClick={handleClick} type="button">Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default AddForm;
